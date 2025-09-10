import { createContext, useEffect, useState } from "react";
import {
  additem,
  getitem,
  getitembycategory,
  additemToWishlist,
  getwishlistitem,
  wishlistitemRemove,
  additemToCart,
  getCartitem,
  CartitemRemove,
} from "../services/productServices";

import { postLogin, postSignup, postLogout } from "../services/authServices";

const ProductItemContext = createContext({
  productItems: [],
  Catagoryitems: [],
  wishlistitems: [],
  AddtoCartitems: [],
  user: [],
  WishlistHandler: () => {},
  addProduct: () => {},
  getcategoryitem: () => {},
  onRemove: () => {},
  addtoCartHandler: () => {},
  onRemoveCart: () => {},
  PostSignup: () => {},
  PostLogin: () => {},
  Postlogout: () => {},
});

const ProductItemProvider = ({ children }) => {
  const [productItems, setproductItems] = useState([]);
  const [Catagoryitems, setCatagoryitems] = useState([]);
  const [wishlistitems, setwishlistitems] = useState([]);
  const [AddtoCartitems, setAddtoCartitems] = useState([]);
  const [user, setuser] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getitem();
        let AddtoCart = [];
        if (user && user._id) {
          AddtoCart = await getCartitem(user._id);
        }
        let wishlist = [];
        if (user && user._id) {
          wishlist = await getwishlistitem(user._id);
        }
        setwishlistitems(wishlist);
        setproductItems(products);
        setAddtoCartitems(AddtoCart);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [user]);

  const addProduct = async (name, image, price, category, detail) => {
    const productItems = {
      name: name,
      image: image,
      price: price,
      category: category,
      detail: detail,
    };
    await additem(productItems);
    setproductItems((prevItems) => [...prevItems, productItems]);
  };

  const getcategoryitem = async (categoryname) => {
    const response = await getitembycategory(categoryname);
    setCatagoryitems(response);
  };

  const WishlistHandler = async (product, userid) => {
    if (!user || !user.islogedin) {
      alert("Please login first to use wishlist.");
      return;
    }
    // Prevent duplicate wishlist items
    if (wishlistitems.some((item) => item._id === product._id)) {
      return;
    }
    const product_id = product._id;
    await additemToWishlist(product_id, userid);
    setwishlistitems((prev) => [...prev, product]);
  };

  const onRemove = async (userid, productid) => {
    await wishlistitemRemove(userid, productid);
    setwishlistitems((prevItems) =>
      prevItems.filter((product) => product._id !== productid)
    );
  };

  const addtoCartHandler = async (userid, product) => {
    if (!user || !user.islogedin) {
      alert("Please login first to use cart.");
      return;
    }
    if (AddtoCartitems.some((item) => item._id === product._id)) {
      return;
    } else {
      const product_id = product._id;
      console.log(product_id);
      await additemToCart(userid, product_id);
      // Add to cart state
      setAddtoCartitems((prevItems) => [...prevItems, product]);
    }
  };

  const onRemoveCart = async (userid, productid) => {
    await CartitemRemove(userid, productid);
    setAddtoCartitems((prevItems) =>
      prevItems.filter((product) => product._id !== productid)
    );
  };

  const PostLogin = async (email, password) => {
    const response = await postLogin(email, password);
    if (response && response.user) {
      setuser(response.user);
    } else {
      setuser([]);
    }
    return response.isuser; // or response.success
  };
  const PostSignup = async (user) => {
    const response = await postSignup(user);
    return response;
  };

  const Postlogout = async (userid) => {
    const responce = await postLogout(userid);
    console.log(responce);
    setuser([]);
    setwishlistitems([]);
    setAddtoCartitems([]);
  };

  return (
    <ProductItemContext.Provider
      value={{
        productItems,
        Catagoryitems,
        wishlistitems,
        AddtoCartitems,
        user,
        WishlistHandler,
        addProduct,
        getcategoryitem,
        onRemove,
        addtoCartHandler,
        onRemoveCart,
        PostSignup,
        PostLogin,
        Postlogout,
      }}
    >
      {children}
    </ProductItemContext.Provider>
  );
};

export default ProductItemProvider;
export { ProductItemContext };
