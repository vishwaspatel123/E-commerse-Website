import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { ProductItemContext } from "../store/product-item-context";

function Login() {
  const { PostLogin } = useContext(ProductItemContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const message = await PostLogin(email, password);
      if (message === "true") {
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Invalid email or password", err);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100 py-12 px-4">
        <div className="max-w-md w-full bg-white/90 rounded-2xl shadow-xl p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-lg shadow hover:from-blue-600 hover:to-pink-600 transition-all"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="/signup" className="text-pink-500 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
