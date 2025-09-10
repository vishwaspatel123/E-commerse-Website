import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductbyCategory from "../components/ProductbyCategory";

function Categorypage() {
  const { catagoryname } = useParams();

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-6 px-0 md:px-0">
        {/* Top Headings */}
        <div className="mb-8 pl-0 md:pl-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 tracking-tight drop-shadow-lg">
            Buy {catagoryname}'s Collection Online
          </h1>
          <h4 className="text-base md:text-lg text-gray-500 font-medium mb-4">
            Home - {catagoryname}
          </h4>
        </div>
        {/* Main Content: Sidebar + Products */}
        <div className="flex gap-6">
          {/* Sidebar/Slider */}
          <aside className="w-60 flex-shrink-0 bg-white/90 rounded-r-2xl shadow-lg border border-blue-100 p-4 h-[70vh] sticky top-28 ml-0">
            <h5 className="text-base font-semibold text-gray-500 uppercase mb-4">
              Menu
            </h5>
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-50 group transition"
                >
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-50 group transition"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">
                    Pro
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-50 group transition"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-50 group transition"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-50 group transition"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-50 group transition"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-50 group transition"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </aside>
          {/* Products Area */}
          <main className="flex-1">
            <div className="w-full min-h-[60vh] bg-white/80 rounded-2xl shadow-lg border border-blue-100 flex flex-col items-center justify-center p-8">
              <ProductbyCategory></ProductbyCategory>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default Categorypage;
