import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductItemProvider from "./store/product-item-context";
import Homepage from "./pages/Homepage";
import AddCart from "./pages/AddCart";
import Wishlist from "./pages/Wishlist";
import Categorypage from "./pages/Catagorypage";
import AdditemsPage from "./pages/AdditemsPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <ProductItemProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Addcart" element={<AddCart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Catagory/:catagoryname" element={<Categorypage />} />
          <Route path="/AddProduct" element={<AdditemsPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ProductItemProvider>
    </>
  );
}

export default App;
