import "./CinemaCard.css";
import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";

function CinemaCard({ cinema }) {
  return (
    <div className="cinema-card">
      <div className="cinema-image-wrapper">
        <img src={cinema.image} alt={cinema.name} />
      </div>

      <div className="cinema-body">
        <h3 className="cinema-title">{cinema.name}</h3>

        <div className="cinema-row">
          <FiMapPin />
          <span>{cinema.name}, {cinema.city}, Indonesia</span>
        </div>

        <div className="cinema-row">
          <FiClock />
          <span>Open 10:00 AM • Closes 12:00 AM</span>
        </div>

        <div className="cinema-row">
          <FiPhone />
          <span>021-12345678</span>
        </div>
      </div>
    </div>
  );
}

export default CinemaCard;
