import { Link } from "react-router-dom";
import "../style/DayCard.css";

function DayCard({ day, title, description, link }) {
  return (
    <div className="day-card">

      <h2>{day}</h2>

      <h3>{title}</h3>

      <p>{description}</p>

      <Link to={link}>
        <button>Open Tasks</button>
      </Link>

    </div>
  );
}

export default DayCard;