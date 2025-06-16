import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggleButton from "../../components/sidebar/ThemeToggleButton";
import Logo from "../../assets/logo.svg";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <aside className="aside">
        <a href="#" className="nav__logo">
          <img className="nav__logo-img" src={Logo} alt="Logo" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link grid" end>
                  <i className="icon-home"></i>
                  <span className="nav__link-name">صفحه اصلی</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about" className="nav__link grid">
                  <i className="icon-user-following"></i>
                  <span className="nav__link-name">درباره من</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/projects" className="nav__link grid">
                  <i className="icon-briefcase"></i>
                  <span className="nav__link-name">پروژه ها</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/blog" className="nav__link grid">
                  <i className="icon-note"></i>
                  <span className="nav__link-name">وبلاگ</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/contact" className="nav__link grid">
                  <i className="icon-bubble"></i>
                  <span className="nav__link-name">ایمیل</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <ThemeToggleButton />
        </div>
      </aside>

      <ul className="mobile__nav-list">
        <li className="mobile__nav-item">
          <NavLink to="/" className="mobile__nav-links grid" end>
            <div className="mobile__nav-icon">
              <i className="icon-home"></i>
            </div>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <NavLink to="/about" className="mobile__nav-links grid">
            <div className="mobile__nav-icon">
              <i className="icon-user-following"></i>
            </div>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <NavLink to="/projects" className="mobile__nav-links grid">
            <div className="mobile__nav-icon">
              <i className="icon-briefcase"></i>
            </div>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <NavLink to="/blog" className="mobile__nav-links grid">
            <div className="mobile__nav-icon">
              <i className="icon-note"></i>
            </div>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <NavLink to="/contact" className="mobile__nav-links grid">
            <div className="mobile__nav-icon">
              <i className="icon-bubble"></i>
            </div>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <ThemeToggleButton />
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
