import heroImg from "../assets/cinema-banner.jpg";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <img src={heroImg} alt="Hero Banner" />

        <div className="hero-overlay">
          <h1>Selamat Datang di</h1>
          <h2>Cinépolis Cinema</h2>
        </div>
      </section>

      <div className="search-panel">
        <div className="search-item">
          <span className="icon">🎬</span>
          <select>
            <option>Movie</option>
          </select>
        </div>

        <div className="divider"></div>

        <div className="search-item">
          <span className="icon">📍</span>
          <select>
            <option>Location</option>
          </select>
        </div>

        <button className="search-btn">🔍</button>
      </div>
    </div>
  );
}

export default HeroBanner;
