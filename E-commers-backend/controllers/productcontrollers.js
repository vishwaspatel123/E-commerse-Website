const Product = require("../models/products");
const User = require("../models/Users");

exports.addproduct = async (req, res, next) => {
  const { name, image, price, category, detail } = req.body;
  const Productitems = new Product({ name, image, price, category, detail });
  await Productitems.save();
  res.json(Productitems);
};

exports.getproducts = async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
};

exports.getproductsbycategory = async (req, res, next) => {
  const category = req.params.categoryname; // or req.params.catagoryname if that's your route
  const products = await Product.find({ category: category });
  res.json(products);
};

exports.addproductToWishlist = async (req, res, next) => {
  const { productid, userid } = req.body;
  const user = await User.findById(userid);
  if (!user.wishlist.includes(productid)) {
    user.wishlist.push(productid);
    await user.save();
  }
  res.json({ success: true, wishlist: user.wishlist });
};

exports.getwishlistitem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const productIds = user.wishlist;
    const Wishlistproduct = await Product.find({ _id: { $in: productIds } });
    res.json(Wishlistproduct);
  } catch (err) {
    next(err);
  }
};

exports.wishlistitemRemove = async (req, res, next) => {
  const { userid, productid } = req.body;
  const user = await User.findById(userid);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  user.wishlist = user.wishlist.filter(
    (id) => id.toString() !== productid.toString()
  );
  await user.save();
  res.json({ message: "Item removed from wishlist" });
};

exports.addproductToCart = async (req, res, next) => {
  const { userid, productid } = req.body;
  const user = await User.findById(userid);
  if (!user.cart.includes(productid)) {
    user.cart.push(productid);
    await user.save();
  }
  res.json({ success: true, cart: user.cart });
};

exports.getCartitem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const productIds = user.cart;
    const cartproduct = await Product.find({ _id: { $in: productIds } });
    res.json(cartproduct);
  } catch (err) {
    next(err);
  }
};

exports.CartitemRemove = async (req, res, next) => {
  const { userid, productid } = req.body;
  const user = await User.findById(userid);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  user.cart = user.cart.filter(
    (id) => id._id.toString() !== productid.toString()
  );
  await user.save();
  res.json({ message: "Item removed from wishlist" });
};
