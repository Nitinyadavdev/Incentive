import "./App.css";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Form from "./components/Form";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Banner />
      <Offers />
      <Dashboard />

      <Form />
      <Footer />
    </div>
  );
}

export default App;
