import "./CinemaCard.css";

function CinemaCard({ cinema }) {
  return (
    <div className="cinema-card">
      <div className="cinema-image-wrapper">
        <img src={cinema.image} alt={cinema.name} />
      </div>

      <div className="cinema-body">
        <h3 className="cinema-title">{cinema.name}</h3>

        <div className="cinema-row">
          <span className="cinema-icon">📍</span>
          <span className="cinema-text">
            {cinema.name}, {cinema.city}, Indonesia
          </span>
        </div>

        <div className="cinema-row">
          <span className="cinema-icon">⏰</span>
          <span className="cinema-text">
            Open 10:00 AM • Closes 12:00 AM
          </span>
        </div>

        <div className="cinema-row">
          <span className="cinema-icon">📞</span>
          <span className="cinema-text">
            021-12345678
          </span>
        </div>
      </div>
    </div>
  );
}

export default CinemaCard;
