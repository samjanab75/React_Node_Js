import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import { Products } from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Products />
      <Footer />
    </>
  );
};

export default App;