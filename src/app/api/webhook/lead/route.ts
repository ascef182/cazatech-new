import { NextResponse } from "next/server";

/**
 * Webhook para enviar leads capturados para sistemas externos
 * 
 * Integra com:
 * - N8N (automação)
 * - Zapier
 * - Make (Integromat)
 * - Qualquer sistema que aceite webhooks HTTP POST
 * 
 * Configure a variável WEBHOOK_URL no .env para ativar
 */

interface LeadData {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  objective?: string;
  message?: string;
  source?: string;
  product?: string;
  segmento?: string;
  timestamp?: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as LeadData | null;
    
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Dados inválidos" },
        { status: 400 }
      );
    }

    const { name, email, phone, company, objective, message, source, product, segmento, timestamp } = body;

    // Log do lead recebido
    console.log("🔗 Lead recebido no webhook:", {
      timestamp: timestamp || new Date().toISOString(),
      name,
      email,
      phone,
      source,
      product,
    });

    // Verifica se há webhook configurado
    const webhookUrl = process.env.WEBHOOK_URL;
    const webhookUrls = process.env.WEBHOOK_URLS?.split(",").filter(Boolean) || [];
    
    const allWebhooks = webhookUrl ? [webhookUrl, ...webhookUrls] : webhookUrls;

    if (allWebhooks.length === 0) {
      console.log("ℹ️  Nenhum webhook configurado. Configure WEBHOOK_URL ou WEBHOOK_URLS no .env");
      return NextResponse.json({
        ok: true,
        message: "Lead registrado (webhook não configurado)",
      });
    }

    // Payload padrão para webhooks
    const payload = {
      // Dados do lead
      lead: {
        name,
        email: email || "",
        phone: phone || "",
        company: company || "",
        objective: objective || "",
        message: message || "",
        segmento: segmento || "",
      },
      // Metadados
      metadata: {
        source: source || "website",
        product: product || "geral",
        timestamp: timestamp || new Date().toISOString(),
        origin: process.env.NEXT_PUBLIC_SITE_URL || "https://caza-tech.com",
      },
    };

    // Enviar para todos os webhooks configurados
    const results = await Promise.allSettled(
      allWebhooks.map(async (url) => {
        const response = await fetch(url.trim(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Webhook-Source": "cazatech-website",
            // Token de autenticação opcional
            ...(process.env.WEBHOOK_SECRET && {
              "X-Webhook-Secret": process.env.WEBHOOK_SECRET,
            }),
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Webhook ${url} retornou status ${response.status}`);
        }

        return { url, status: "success" };
      })
    );

    // Log dos resultados
    const successCount = results.filter((r) => r.status === "fulfilled").length;
    const failedCount = results.filter((r) => r.status === "rejected").length;

    console.log(`✅ Webhooks enviados: ${successCount} sucesso, ${failedCount} falha`);

    if (failedCount > 0) {
      results
        .filter((r) => r.status === "rejected")
        .forEach((r) => {
          if (r.status === "rejected") {
            console.error("❌ Webhook falhou:", r.reason);
          }
        });
    }

    return NextResponse.json({
      ok: true,
      message: `Lead enviado para ${successCount} webhook(s)`,
      webhooks: {
        total: allWebhooks.length,
        success: successCount,
        failed: failedCount,
      },
    });
  } catch (err) {
    console.error("❌ Erro no webhook:", err);
    return NextResponse.json(
      { ok: false, error: "Erro ao processar webhook" },
      { status: 500 }
    );
  }
}

// GET para verificar status do webhook
export async function GET() {
  const webhookUrl = process.env.WEBHOOK_URL;
  const webhookUrls = process.env.WEBHOOK_URLS?.split(",").filter(Boolean) || [];
  const allWebhooks = webhookUrl ? [webhookUrl, ...webhookUrls] : webhookUrls;

  return NextResponse.json({
    ok: true,
    status: "active",
    webhooksConfigured: allWebhooks.length,
    hasSecret: !!process.env.WEBHOOK_SECRET,
    message: allWebhooks.length > 0 
      ? `${allWebhooks.length} webhook(s) configurado(s)` 
      : "Nenhum webhook configurado",
  });
}




