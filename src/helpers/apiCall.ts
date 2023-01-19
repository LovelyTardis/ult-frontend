export const apiCall = async (path: string, method: string = "GET") => {
  const call = await fetch(`${import.meta.env.DEV_API}${path}`, {
    method,
  });
  const jsonCall = await call.json();
  const { ...res } = jsonCall;

  return {
    ...res,
  };
};
