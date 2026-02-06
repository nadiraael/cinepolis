import logo from "../assets/cinepolis-logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* TOP ROW */}
        <div className="navbar-top">
          <div className="top-left">
            <button type="button" className="lang-btn">
              🌐 Bahasa
            </button>
          </div>

          <div className="top-center">
            <img src={logo} alt="Cinépolis" className="logo" />
          </div>

          <div className="top-right">
            <div className="location">📍 Medan</div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="navbar-bottom">
          <nav className="nav-menu">
            <a href="/">Movies</a>
            <a href="/">F&amp;B</a>
            <a href="/">News &amp; Promotions</a>
            <a href="/">Cinema</a>
          </nav>

          <div className="right-actions">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search movies or theater.."
              />
            </div>
            <button type="button" className="join-btn">
              Join Us
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
