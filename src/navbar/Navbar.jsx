import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "./elicit-logo.png";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [scrollOpacity, setScrollOpacity] = useState(0);

  const maxScroll = 500;
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const opacity = scrollY / maxScroll;

    setScrollOpacity(opacity);
  });

  return (
    <header className="header" style={{ backgroundColor: `rgba(0 0 0 / 1)` }}>
      {/* <header className="header" style={{ backgroundColor: `rgba(0 0 0 / ${scrollOpacity})` }}> */}
      <img className="logoContainer" src={logo} alt="logo" height={70} />
      <nav ref={navRef}>
        <a className="hover-underline-animation" href="/">
          Home
        </a>
        <a className="hover-underline-animation" href="/Upcoming-Events">
          Events
        </a>
        <a className="hover-underline-animation" href="/Gallery">
          Gallery
        </a>
        <a className="hover-underline-animation" href="/Team">
          Team
        </a>
        <a className="hover-underline-animation" href="/Sponsors">
          Sponsors
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
