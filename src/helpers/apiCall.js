export const apiCall = async (
  path,
  method = "GET",
  body = {},
  signal = null
) => {
  let call = null;
  const url = import.meta.env.VITE_API;

  switch (method) {
    case "POST":
      call = await fetch(`${url}${path}`, {
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "user-token": localStorage.getItem("user-token") || "",
        },
        signal,
      });
      break;
    default:
      call = await fetch(`${url}${path}`, { signal });
      break;
  }

  const jsonCall = await call.json();
  const { ...res } = jsonCall;

  return {
    ...res,
  };
};
