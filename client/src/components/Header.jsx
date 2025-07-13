import React, { useEffect, useState } from "react";
import logo from "../assets/logo.webp";

export default function Header({ scrollInfo }) {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const userScrolledHeight = scrollInfo.scrollPercentage;
  const [toggelIsClicked, setToggelIsClicked] = useState(false);
  const [toggleBtnDataBsToggle, setToggleBtnDataBsToggle] =
    useState("collapse");
  const [theme, setTheme] = useState("light");
  const [showNotAvailableText, setShowNotAvailableText] = useState(false);

  function handleNavItempClicked() {
    if (toggelIsClicked) {
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <nav
      className="navbar navbar-expand-sm position-fixed top-0"
      style={{ zIndex: "999", width: "100vw" }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          {/* <span className="fw-bold text-white">SP</span> */}
          <img src={logo} alt="SP" className="logo ms-4 ms-sm-2" />
        </a>
        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle={toggleBtnDataBsToggle}
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggelIsClicked(!toggelIsClicked)}
        >
          {/* <span className="navbar-toggler-icon bg-white"></span> */}
          <div>
            <span
              className={`navbar-togler-btn-span ${toggelIsClicked && "line1"}`}
            ></span>
            <span
              className={`navbar-togler-btn-span ${toggelIsClicked && "line2"}`}
            ></span>
            <span
              className={`navbar-togler-btn-span ${toggelIsClicked && "line3"}`}
            ></span>
          </div>
        </button>
        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <li
                className={`nav-item nav-li ${userScrolledHeight > 90 && index == 4
                  ? "active-nav-item"
                  : userScrolledHeight <= 90 &&
                    userScrolledHeight > 52 &&
                    index == 3
                    ? "active-nav-item"
                    : userScrolledHeight <= 52 &&
                      userScrolledHeight > 33 &&
                      index == 2
                      ? "active-nav-item"
                      : userScrolledHeight <= 33 &&
                        userScrolledHeight > 14 &&
                        index == 1
                        ? "active-nav-item"
                        : userScrolledHeight <= 14 && index == 0
                          ? "active-nav-item"
                          : "disactive-nav-item"
                  }`}
                style={{ width: "fit-content", margin: "0 auto" }}
                onClick={handleNavItempClicked}
                key={index}
              >
                <a
                  className="nav-link nav-list"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
                <p></p>
              </li>
            ))}

            {/* <li
              className="theme-mode"
              onClick={() => setTheme((currTheme) => currTheme == 'light' ? 'dark' : 'light')}
            onMouseEnter={() => setShowNotAvailableText(true)}
            onMouseLeave={() => setShowNotAvailableText(false)}
            >
              {theme == 'light' ? (
                <i className={`bi bi-moon-fill fs-5`}></i>
              ) : (
                <i className={`bi bi-brightness-high fs-5`}></i>
              )}
              {showNotAvailableText && (
                <span className=" text-white position-absolute text-center p-1 rounded mode-not-available">
                  Currently <br />
                  not available
                </span>
              )}
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
