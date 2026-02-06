import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ===== TOP FOOTER ===== */}
      <div className="footer-top">
        {/* COLUMN 1 */}
        <div className="footer-col">
          <h4>DOWNLOAD OUR APP</h4>
          <div className="app-buttons">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
            />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>ABOUT CINÉPOLIS</h4>
          <ul>
            <li>About Us</li>
            <li>Cinema Class</li>
            <li>Membership</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>SUPPORT</h4>
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Advertisement & Partnership</li>
          </ul>
        </div>
      </div>

      {/* ===== BOTTOM FOOTER ===== */}
      <div className="footer-bottom">
        <span>© CINÉPOLIS 2026. ALL RIGHT RESERVED</span>

        <div className="footer-policy">
          <span>PRIVACY POLICY</span>
          <span>TERMS AND CONDITIONS</span>
        </div>

        <div className="footer-social">
          <span>📞</span>
          <span>🐦</span>
          <span>📸</span>
          <span>▶</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
