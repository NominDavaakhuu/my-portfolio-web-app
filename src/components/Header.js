import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.png";
import "./Header.css";

export const Header = () => {
    return (
      <header>
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
        </Link>
        <nav className="navigation">
          <NavLink to="/" className="link" end>Home</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/resume" className="link">Resume</NavLink>
          <NavLink to="/portfolio" className="link">Portfolio</NavLink>
        </nav>

      </header>
    )
  }