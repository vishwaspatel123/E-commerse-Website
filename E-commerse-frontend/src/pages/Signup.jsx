import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { ProductItemContext } from "../store/product-item-context";

function Signup() {
  const { PostSignup } = useContext(ProductItemContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    profileImage: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await PostSignup(form);
      if (user && user.iscreated === true) {
        navigate("/login");
      } else if (user && user.iscreated === false) {
        alert("User already exists");
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      setError("Signup failed. Please try again.", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 py-12 px-4">
        <div className="max-w-lg w-full bg-white/90 rounded-2xl shadow-xl p-8 border border-pink-100">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Profile Image URL
              </label>
              <input
                type="text"
                name="profileImage"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={form.profileImage}
                onChange={handleChange}
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-lg shadow hover:from-pink-600 hover:to-blue-600 transition-all"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
