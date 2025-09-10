export const additem = async (product) => {
  const { name, image, price, category, detail } = product;
  const response = await fetch(
    "https://e-commerse-website-backend.onrender.com/api/product",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, image, price, category, detail }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add item");
  }
  return response.json();
};

export const getitem = async () => {
  const response = await fetch(
    "https://e-commerse-website-backend.onrender.com/api/product"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch item");
  }
  const productsitems = await response.json();
  return productsitems;
};

export const getitembycategory = async (categoryname) => {
  const response = await fetch(
    `https://e-commerse-website-backend.onrender.com/api/product/category/${categoryname}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch item by category");
  }
  const productsitems = await response.json();
  return productsitems;
};

export const additemToWishlist = async (productid, userid) => {
  const response = await fetch(
    "https://e-commerse-website-backend.onrender.com/api/product/Wishlist",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productid, userid }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add item");
  }
  return response.json();
};

export const getwishlistitem = async (id) => {
  const response = await fetch(
    `https://e-commerse-website-backend.onrender.com/api/product/Wishlist/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch item");
  }
  const products = await response.json();
  return products;
};

export const wishlistitemRemove = async (userid, productid) => {
  const response = await fetch(
    `https://e-commerse-website-backend.onrender.com/api/product/wishlist`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid, productid }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add item");
  }
  return response.json();
};

export const additemToCart = async (userid, productid) => {
  const response = await fetch(
    "https://e-commerse-website-backend.onrender.com/api/product/Addtocart",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid, productid }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add item");
  }
  return response.json();
};

export const getCartitem = async (id) => {
  const response = await fetch(
    `https://e-commerse-website-backend.onrender.com/api/product/Addtocart/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch item");
  }
  const products = await response.json();
  return products;
};

export const CartitemRemove = async (userid, productid) => {
  const response = await fetch(
    `https://e-commerse-website-backend.onrender.com/api/product/Addtocart`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid, productid }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add item");
  }
  return response.json();
};
