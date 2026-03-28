const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchApi<T>(endPoint: string, options: RequestInit = {}) {
  const { headers, ...rest } = options;
  const res = await fetch(`${BASE_URL}${endPoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...rest,
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const message =
      data && typeof data.error === "string" ? data.error : "API Error";
    throw new Error(message);
  }

  return data as Promise<T>;
}
