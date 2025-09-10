import { useContext, useRef } from "react";
import { ProductItemContext } from "../store/product-item-context";

function AddProduct() {
  const { addProduct } = useContext(ProductItemContext);
  const Name = useRef("");
  const Price = useRef("");
  const Category = useRef("");
  const Image = useRef("");
  const Detail = useRef("");

  const handleonclick = (e) => {
    e.preventDefault();
    const name = Name.current.value;
    const price = Price.current.value;
    const category = Category.current.value;
    const image = Image.current.value;
    const detail = Detail.current.value;
    addProduct(name, image, price, category, detail);
    Name.current.value = "";
    Price.current.value = "";
    Category.current.value = "";
    Image.current.value = "";
    Detail.current.value = "";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-pink-50 py-10">
      <form
        onSubmit={handleonclick}
        className="flex flex-col gap-5 p-8 bg-white/90 rounded-2xl shadow-2xl max-w-lg w-full border border-blue-100"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">
          Add New Product
        </h2>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            ref={Name}
            name="Product Name"
            placeholder="Product Name"
            required
            className="px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Price</label>
          <input
            type="number"
            ref={Price}
            name="Price"
            placeholder="Price"
            required
            className="px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Category</label>
          <input
            type="text"
            ref={Category}
            name="Category"
            placeholder="Category"
            required
            className="px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            ref={Image}
            name="Image Url"
            placeholder="Image URL"
            required
            className="px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Product Detail</label>
          <textarea
            ref={Detail}
            name="Product detail"
            placeholder="Product detail"
            required
            className="px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-blue-50 resize-none min-h-[80px]"
          />
        </div>
        <button
          type="submit"
          className="mt-2 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow hover:from-blue-600 hover:to-pink-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
