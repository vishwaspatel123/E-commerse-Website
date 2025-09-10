import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductItemContext } from "../store/product-item-context";

function Fectures() {
  const { productItems } = useContext(ProductItemContext);
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 bg-gradient-to-br from-white via-blue-50 to-pink-50 rounded-2xl shadow-xl border border-blue-100/40">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-8 text-center tracking-tight drop-shadow-lg">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productItems.map((product, idx) => (
          <div className="flex justify-center">
            <ProductCard key={idx} compact product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fectures;
