export const tryConnection = async () => {
  try {
    await fetch(`${import.meta.env.VITE_DEVAPI}`);
    return true;
  } catch (_) {
    return {
      code: 500,
      error: true,
      data: "No connection with the server api.",
    };
  }
};
