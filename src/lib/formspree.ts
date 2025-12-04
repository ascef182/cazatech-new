"use client";

type FormspreePayload = Record<string, string | string[] | undefined>;

async function postJson(url: string, payload: FormspreePayload) {
  console.log('📤 Enviando para Formspree:', { url, payload });
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  console.log('📥 Resposta do Formspree:', {
    status: response.status,
    statusText: response.statusText,
    ok: response.ok
  });

  let data: unknown = null;
  try {
    data = await response.json();
    console.log('📦 Data recebida:', data);
  } catch {
    data = null;
  }

  if (!response.ok) {
    console.error('❌ Erro Formspree:', { response, data });
    const fallbackMessage =
      typeof data === "object" && data !== null && "errors" in data
        ? JSON.stringify((data as { errors: unknown }).errors)
        : `Erro ${response.status}: ${response.statusText}`;
    throw new Error(fallbackMessage);
  }

  return data;
}

export async function submitToFormspree(payload: FormspreePayload) {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  
  console.log('🔍 Formspree Debug:', {
    endpoint: endpoint || 'NÃO ENCONTRADO',
    hasEndpoint: !!endpoint,
    envKeys: Object.keys(process.env).filter(k => k.includes('FORMSPREE'))
  });

  if (!endpoint) {
    throw new Error(
      "Formspree endpoint não configurado. Defina NEXT_PUBLIC_FORMSPREE_ENDPOINT no ambiente."
    );
  }

  const enrichedPayload: FormspreePayload = {
    ...payload,
    submittedAt: new Date().toISOString(),
  };

  return postJson(endpoint, enrichedPayload);
}
