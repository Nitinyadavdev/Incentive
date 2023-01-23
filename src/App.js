import "./App.css";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OfferSection from "./components/OfferSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* <Banner /> */}
      <OfferSection />
      <Dashboard />
    </div>
  );
}

export default App;
