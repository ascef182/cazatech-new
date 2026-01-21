"use client";

type FormspreePayload = Record<string, string | string[] | undefined>;

const isDev = process.env.NODE_ENV !== "production";

async function postJson(url: string, payload: FormspreePayload) {
  if (isDev) {
    console.log("📤 Enviando para Formspree:", { url, payload });
  }
  
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (networkErr) {
    const err = networkErr as Error;
    if (isDev) {
      console.error("❌ Erro de rede/Formspree fetch:", {
        message: err.message,
        name: err.name,
      });
    }
    throw new Error(`Falha de rede ao contatar Formspree: ${err.message}`);
  }

  if (isDev) {
    console.log("📥 Resposta do Formspree:", {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      url: (response as any).url,
      contentType: response.headers.get("content-type"),
    });
  }

  let data: unknown = null;
  try {
    data = await response.json();
    if (isDev) {
      console.log("📦 Data recebida:", data);
    }
  } catch {
    // Pode ser HTML/texto quando headers não retornam JSON
    try {
      const text = await response.text();
      data = { rawText: text } as unknown;
      if (isDev) {
        console.log("📦 Texto recebido (não-JSON):", text?.slice(0, 400));
      }
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    const messageFromJson =
      typeof data === "object" && data !== null && "errors" in data
        ? JSON.stringify((data as { errors: unknown }).errors)
        : undefined;
    const messageFromText =
      typeof data === "object" && data !== null && "rawText" in data
        ? String((data as { rawText?: string }).rawText || "")?.slice(0, 400)
        : undefined;

    const composedMessage =
      messageFromJson ||
      messageFromText ||
      `Erro ${response.status}: ${response.statusText}`;

    if (isDev) {
      console.error("❌ Erro Formspree (detalhes):", {
        status: response.status,
        statusText: response.statusText,
        url: (response as any).url,
        contentType: response.headers.get("content-type"),
        bodyPreview: messageFromText,
        jsonErrors: messageFromJson,
      });
    }
    throw new Error(composedMessage);
  }

  return data;
}

export async function submitToFormspree(payload: FormspreePayload) {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  
  if (isDev) {
    console.log("🔍 Formspree Debug:", {
      endpoint: endpoint || "NÃO ENCONTRADO",
      hasEndpoint: !!endpoint,
      envKeys: Object.keys(process.env).filter((k) => k.includes("FORMSPREE")),
    });
  }

  if (!endpoint) {
    throw new Error(
      "Formspree endpoint não configurado. Defina NEXT_PUBLIC_FORMSPREE_ENDPOINT no ambiente."
    );
  }

  // Validação simples do formato do endpoint esperado: https://formspree.io/f/<id>
  const endpointOk = /^https?:\/\/formspree\.io\/(f|forms)\/[A-Za-z0-9]+\/?$/.test(endpoint);
  if (!endpointOk && isDev) {
    console.warn(
      "⚠️ Formspree endpoint pode estar em formato inesperado. Esperado: https://formspree.io/f/<id>.",
      { endpoint }
    );
  }

  const enrichedPayload: FormspreePayload = {
    ...payload,
    submittedAt: new Date().toISOString(),
  };

  return postJson(endpoint, enrichedPayload);
}
