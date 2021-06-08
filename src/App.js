import "./App.css";
import "./custom.scss";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <div style={{ background: "var(--clr-grey-10)" }}>
        <FeaturedProducts />
      </div>
      <Footer />
    </>
  );
}

export default App;
