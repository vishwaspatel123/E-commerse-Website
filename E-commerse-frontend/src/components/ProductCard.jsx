import { FaHeart, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { ProductItemContext } from "../store/product-item-context";

// Accept showRemove and onRemove as optional props
function ProductCard({ product, showRemove }) {
  const { WishlistHandler, onRemove, addtoCartHandler, user, wishlistitems } =
    useContext(ProductItemContext);
  const isWishlisted = wishlistitems.some((item) => item._id === product._id);
  return (
    <div
      className={`w-56 h-[320px] flex flex-col bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 relative group overflow-hidden`}
    >
      <div className="relative flex-shrink-0">
        <a href="#">
          <img
            className="rounded-t-2xl w-full h-32 object-contain bg-gradient-to-br from-blue-50 via-white to-pink-50 p-3 group-hover:scale-105 transition-transform duration-300"
            src={product.image}
            alt="product image"
          />
        </a>
        {showRemove ? (
          <button
            className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow hover:bg-red-100 transition-colors z-10"
            onClick={() => onRemove(user._id, product._id)}
            title="Remove from wishlist"
          >
            <FaTimes className="text-red-500" size={18} />
          </button>
        ) : (
          <button
            className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow hover:bg-pink-100 transition-colors z-10"
            onClick={() => {
              if (isWishlisted) {
                onRemove(user._id, product._id);
              } else {
                WishlistHandler(product, user._id);
              }
            }}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <FaHeart
              className={isWishlisted ? "text-pink-500" : "text-gray-400"}
              size={18}
            />
          </button>
        )}
      </div>
      <div className="flex-1 flex flex-col px-4 py-3">
        <a href="#">
          <h5 className="text-base font-semibold tracking-tight text-gray-900 mb-1 truncate">
            {product.name}
          </h5>
        </a>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2 overflow-hidden text-ellipsis min-h-[38px]">
          {product.detail}
        </p>
        <div className="flex items-end justify-between mt-auto">
          <span className="text-base font-bold text-blue-700 bg-blue-50 rounded px-2 py-0.5">
            Rs {product.price}
          </span>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs px-4 py-1.5 text-center shadow transition-all"
            onClick={() => addtoCartHandler(user._id, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
