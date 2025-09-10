export const postLogin = async (email, password) => {
  const response = await fetch(
    "https://e-commerse-website-backend.onrender.com/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add item");
  }
  return response.json();
};

export const postSignup = async (user) => {
  const { name, email, password, address, phone, profileImage } = user;
  const response = await fetch(
    "https://e-commerse-website-backend.onrender.com/api/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        address,
        phone,
        profileImage,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add item");
  }
  return response.json();
};

export const postLogout = async (userid) => {
  const response = await fetch(
    "https://e-commerse-website-backend.onrender.com/api/auth/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add item");
  }
  return response.json();
};
