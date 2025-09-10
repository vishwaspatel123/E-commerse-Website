const express = require("express");
const ProductRouter = express.Router();

const productcontrollers = require("../controllers/productcontrollers");

ProductRouter.post("/", productcontrollers.addproduct);
ProductRouter.get("/", productcontrollers.getproducts);
ProductRouter.get(
  "/category/:categoryname",
  productcontrollers.getproductsbycategory
);
ProductRouter.post("/Wishlist", productcontrollers.addproductToWishlist);
ProductRouter.get("/Wishlist/:id", productcontrollers.getwishlistitem);
ProductRouter.delete("/wishlist", productcontrollers.wishlistitemRemove);

ProductRouter.post("/Addtocart", productcontrollers.addproductToCart);
ProductRouter.get("/Addtocart/:id", productcontrollers.getCartitem);
ProductRouter.delete("/Addtocart", productcontrollers.CartitemRemove);

module.exports = ProductRouter;
