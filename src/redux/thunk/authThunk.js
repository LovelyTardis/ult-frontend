export const loginThunk = async (username, password) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const { code, error, data } = await response.json();

    console.log(error);
    console.log(code);
    console.log(data);

    if (error) throw new Error(`${code} | ${data}`);

    return data;
  } catch (error) {
    return error.message;
  }
};
