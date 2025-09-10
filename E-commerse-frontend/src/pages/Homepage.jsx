import Navbar from "../components/Navbar";
import AdsBanner from "../components/AdsBanner";
import Fectures from "../components/Fectures";

function Homepage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <Navbar />
      <section className="w-full flex flex-col items-center justify-center py-6 md:py-10">
        <AdsBanner />
      </section>
      <section className="w-full flex flex-col items-center justify-center py-6 md:py-12 bg-white/80 rounded-t-3xl shadow-inner mt-8">
        <Fectures />
      </section>
    </div>
  );
}
export default Homepage;
