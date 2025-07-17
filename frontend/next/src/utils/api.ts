// export const api = async (url: string, method = "GET", body?: any) => {
//   const res = await fetch(`https://api.fartakproject.ir${url}`, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: body ? JSON.stringify(body) : undefined,
//   });
//   return res.json();
// };

// export const api = async (
//   url: string,
//   method: string = "GET",
//   body?: unknown
// ) => {
//   const res = await fetch(`https://api.fartakproject.ir${url}`, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: body ? JSON.stringify(body) : undefined,
//   });
//   return res;
// };

export const api = async (
  url: string,
  method: string = "GET",
  body?: unknown
) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`https://api.fartakproject.ir${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  return res;
};
