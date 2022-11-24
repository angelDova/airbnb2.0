import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="sm:mx-6 md:mx019 lg:mx-12 px-3">
        <Filters />
        <Rentals />
      </div>
      <Footer />
    </div>
  );
}

export default App;
