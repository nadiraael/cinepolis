import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import cinemas from "./data/cinemas";
import CinemaCard from "./components/CinemaCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />

      <div className="container">
        <h2 className="section-title">Cinemas</h2>

        <div className="cinema-grid">
          {cinemas.map((cinema) => (
            <CinemaCard key={cinema.id} cinema={cinema} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
