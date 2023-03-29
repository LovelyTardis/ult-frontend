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

    return await response.json();
  } catch (_) {
    return { code: 500, error: true, data: "Error during the login" };
  }
};

export const autoLoginThunk = async (token) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API}/user/autologin`, {
      method: "POST",
      headers: {
        "user-token": token,
      },
    });

    return await response.json();
  } catch (_) {
    return { code: 500, error: true, data: "Error during the login" };
  }
};
