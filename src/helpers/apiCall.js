const apiCall = async (path) => {
  const call = await fetch(`${import.meta.env.DEV_API}${path}`);
  const jsonCall = await call.json();
  const { ...res } = jsonCall;

  return {
    ...res,
  };
};

export default apiCall;
