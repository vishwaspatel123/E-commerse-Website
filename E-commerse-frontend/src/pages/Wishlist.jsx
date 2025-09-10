import Navbar from "../components/Navbar";
import Wishlistproduct from "../components/Wishlistproduct";

function Wishlist() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-white to-blue-100 flex flex-col items-center justify-start py-16 px-2">
        <div className="w-full max-w-6xl bg-white/90 rounded-3xl shadow-2xl border border-pink-100 p-10 flex flex-col items-center relative overflow-visible md:overflow-hidden">
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-pink-200 opacity-20 rounded-full blur-2xl z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-200 opacity-20 rounded-full blur-2xl z-0"></div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-10 z-10 drop-shadow-lg tracking-tight w-full text-center">
            <span className="inline-block align-middle mr-2">💖</span>Your
            Wishlist
          </h1>
          <div className="w-full z-10 flex flex-col items-center">
            <Wishlistproduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
