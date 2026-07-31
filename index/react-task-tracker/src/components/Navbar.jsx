import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>⚛ React Daily Tracker</h2>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/roadmap">Roadmap</Link>
        </li>

        <li>
          <Link to="/progress">Progress</Link>
        </li>
</ul>

    </nav>
  );
}

export default Navbar;