export const apiCall = async (path, method = "GET", body = {}) => {
  let call = null;
  const url = import.meta.env.VITE_DEVAPI;

  try {
    switch (method) {
      case "POST":
        call = await fetch(`${url}${path}`, {
          method,
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            "user-token": localStorage.getItem("user-token") || "",
          },
        });
        break;
      default:
        call = await fetch(`${url}${path}`);
        break;
    }

    const jsonCall = await call.json();
    const { ...res } = jsonCall;

    return {
      ...res,
    };
  } catch (error) {
    console.error(error);
  }
};
