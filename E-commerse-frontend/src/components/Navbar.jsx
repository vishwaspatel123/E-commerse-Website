import { useContext, useState, useRef, useEffect } from "react";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { FiSearch, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ProductItemContext } from "../store/product-item-context";

function Navbar() {
  const { getcategoryitem, wishlistitems, AddtoCartitems, user, Postlogout } =
    useContext(ProductItemContext);
  const wishlistCount = wishlistitems.length;
  const cartCount = AddtoCartitems.length;

  const [userDropdown, setUserDropdown] = useState(false);
  const userRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserDropdown(false);
      }
    }
    if (userDropdown) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [userDropdown]);

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-white to-pink-50 shadow-lg w-full sticky top-0 z-50 border-b border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 tracking-tight drop-shadow-sm select-none">
                E-Shop
              </span>
            </Link>
          </div>
          {/* Menu */}
          <div className="hidden md:flex space-x-8 ml-10">
            <Link
              to="/Catagory/Men"
              className="relative group text-gray-700 font-semibold px-3 py-1 rounded-lg transition-all duration-200 hover:bg-blue-100/60 hover:text-blue-600"
              onClick={() => getcategoryitem("Men")}
            >
              Men
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-1/2"></span>
            </Link>
            <Link
              to="/Catagory/Women"
              className="relative group text-gray-700 font-semibold px-3 py-1 rounded-lg transition-all duration-200 hover:bg-pink-100/60 hover:text-pink-600"
              onClick={() => getcategoryitem("Women")}
            >
              Women
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-1/2"></span>
            </Link>
            <Link
              to="/Catagory/Kids"
              className="relative group text-gray-700 font-semibold px-3 py-1 rounded-lg transition-all duration-200 hover:bg-yellow-100/60 hover:text-yellow-600"
              onClick={() => getcategoryitem("Kids")}
            >
              Kids
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-1/2"></span>
            </Link>
          </div>
          {/* Search bar */}
          <div className="flex-1 flex justify-center px-2 lg:ml-6">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-blue-400" size={20} />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-blue-200 rounded-full shadow-sm leading-5 bg-white/80 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 sm:text-sm transition-all duration-200"
                placeholder="Search for products..."
                type="search"
                name="search"
              />
            </div>
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link
              to="/Wishlist"
              className="relative group text-gray-700 hover:text-pink-500 transition"
            >
              <FaHeart size={22} />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1.5 py-0.5 shadow group-hover:scale-110 transition-transform">
                {wishlistCount}
              </span>
            </Link>
            <Link
              to="/Addcart"
              className="relative group text-gray-700 hover:text-blue-500 transition"
            >
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5 shadow group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            </Link>
            <div className="relative" ref={userRef}>
              <button
                className="relative group text-gray-700 hover:text-yellow-500 transition p-1 rounded-full focus:outline-none"
                onClick={() => setUserDropdown((v) => !v)}
                aria-haspopup="true"
                aria-expanded={userDropdown}
              >
                <FaUser size={22} />
              </button>
              {userDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-yellow-100 z-50 py-2 animate-fadeIn">
                  {user && user.isloggedIn ? (
                    <>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-t-xl transition"
                        onClick={() => setUserDropdown(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/"
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-b-xl transition"
                        onClick={() => {
                          setUserDropdown(false);
                          Postlogout(user._id);
                          // You should call your logout handler here
                        }}
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-t-xl transition"
                        onClick={() => setUserDropdown(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-b-xl transition"
                        onClick={() => setUserDropdown(false)}
                      >
                        Signup
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center ml-4">
            <Link
              to="/AddProduct"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-blue-600 hover:to-pink-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              + Add Product
            </Link>
          </div>

          <div className="md:hidden flex items-center ml-2">
            <button className="p-2 rounded-full hover:bg-blue-100/60 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <FiMenu size={26} className="text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
