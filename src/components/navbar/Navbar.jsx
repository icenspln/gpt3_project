/** @format */
import "./navbar.css";

import logo from "../../assets/logo.svg";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#whatGPT">What is GPT?</a>
      </li>
      <li>
        <a href="#possibility">Open AI</a>
      </li>
      <li>
        <a href="#features">Case Studies</a>
      </li>
      <li>
        <a href="#library">Library</a>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar">
        <div className="navbar__links">
          <div className="navbar__logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navbar__list">
            <Menu />
          </ul>

          <div className="navbar__buttons">
            <button className="navbar__button">Sign in</button>
            <button className="navbar__button  navbar__button--secondary">
              Sign up
            </button>
          </div>
          <div className="navbar__menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="navbar__menu scale-up-center">
                <ul className="navbar__list--mobile">
                  <Menu />
                  <div className="navbar__buttons navbar__buttons--mobile">
                    <button className="navbar__button navbar__button--mobile">
                      Sign in
                    </button>
                    <button className="navbar__button  navbar__button--secondary navbar__button--mobile">
                      Sign up
                    </button>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
