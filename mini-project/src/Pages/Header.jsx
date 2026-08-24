import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>Mini Project Website</h2>
      </div>

      <nav>
        <NavLink
          to="/Home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>{ " | "}

        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>{ " | "}

        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>{ " | "}
      </nav>
    </header>
  );
}

export default Header;