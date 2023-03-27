export const tryConnection = async (signal = null) => {
  const connected = await fetch(`${import.meta.env.VITE_API}`, {
    signal,
  });

  if (connected.ok) return true;

  return {
    code: 500,
    error: true,
    data: "No connection with the server api.",
  };
};
