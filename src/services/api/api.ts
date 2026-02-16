const BASE_URL = "http://localhost:3000";

export async function fetchApi<T>(endPoint: string, options: RequestInit = {}) {
  const { headers, ...rest } = options;
  const res = await fetch(`${BASE_URL}${endPoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...rest,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "API Error");
  }

  return res.json() as Promise<T>;
}
