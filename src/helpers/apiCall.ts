export const apiCall = async (
  path: string,
  method: string = "GET",
  body: object = {}
) => {
  let call = null;
  const url = "http://localhost:8000";

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
