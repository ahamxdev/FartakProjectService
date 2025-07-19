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

// export const api = async (
//   url: string,
//   method: string = "GET",
//   body?: unknown,
  
// ) => {
//   const token =
//   typeof window !== "undefined" ? localStorage.getItem("token") : null;
//   const userId =
//   typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  


//   const isFormData =
//     typeof FormData !== "undefined" && body instanceof FormData;

//   const headers: HeadersInit = {};

//   if (!isFormData) {
//     headers["Content-Type"] = "application/json";
//   }

//   if (token) {
//     headers["Authorization"] = `Bearer ${token}-${userId}`;
//   }

//   const res = await fetch(`https://api.fartakproject.ir${url}`, {
//     method,
//     headers,
//     body: body
//       ? isFormData
//         ? (body as FormData)
//         : JSON.stringify(body)
//       : undefined,
//   });

//   return res;
// };
