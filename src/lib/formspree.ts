"use client";

type FormspreePayload = Record<string, string | string[] | undefined>;

async function postJson(url: string, payload: FormspreePayload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data: unknown = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const fallbackMessage =
      typeof data === "object" && data !== null && "errors" in data
        ? JSON.stringify((data as { errors: unknown }).errors)
        : "Falha ao enviar formulário";
    throw new Error(fallbackMessage);
  }

  return data;
}

export async function submitToFormspree(payload: FormspreePayload) {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

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
