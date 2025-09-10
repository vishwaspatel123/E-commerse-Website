import { ProductItemContext } from "../store/product-item-context";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";

function AddtoCart() {
  const { AddtoCartitems, onRemoveCart, user } = useContext(ProductItemContext);

  // Calculate total price
  const total = AddtoCartitems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-pink-100 flex flex-col items-center py-12 px-2">
        <div className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col items-center relative overflow-visible md:overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mb-8 z-10 drop-shadow-lg tracking-tight w-full text-center">
            🛒 Your Cart
          </h1>
          {AddtoCartitems.length === 0 ? (
            <div className="text-lg text-gray-500 py-16">
              Your cart is empty.
            </div>
          ) : (
            <div className="w-full flex flex-col gap-6">
              {AddtoCartitems.map((product) => (
                <div
                  key={product._id}
                  className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow p-4 border border-blue-50 relative"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-contain rounded-lg bg-gradient-to-br from-blue-50 via-white to-pink-50"
                  />
                  <div className="flex-1 flex flex-col items-start">
                    <h2 className="text-xl font-bold text-blue-700 mb-1 truncate">
                      {product.name}
                    </h2>
                    <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                      {product.detail}
                    </p>
                    <span className="text-lg font-semibold text-pink-600 bg-pink-50 rounded px-2 py-0.5">
                      Rs {product.price}
                    </span>
                  </div>
                  <button
                    className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow hover:bg-red-100 transition-colors z-10"
                    onClick={() => onRemoveCart(user._id, product._id)}
                    title="Remove from cart"
                  >
                    <FaTrash className="text-red-500" size={18} />
                  </button>
                </div>
              ))}
              <div className="flex justify-between items-center mt-8 px-2">
                <span className="text-2xl font-bold text-blue-700">Total:</span>
                <span className="text-2xl font-bold text-pink-600">
                  Rs {total}
                </span>
              </div>
              <button
                className="w-full mt-6 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow hover:from-blue-600 hover:to-pink-600 transition-all"
                onClick={() => alert("Order placed! (Implement buy logic)")}
              >
                Buy Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddtoCart;
