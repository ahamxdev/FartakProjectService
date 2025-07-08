export const api = async (url: string, method = "GET", body?: any) => {
  const res = await fetch(`https://api.fartakproject.ir${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
};
