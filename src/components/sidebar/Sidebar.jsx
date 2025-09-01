import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggleButton from "../../components/sidebar/ThemeToggleButton";
import Logo from "../../assets/logo.svg";
import "./sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { GiAstronautHelmet } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav__link active" : "nav__link"
                  }
                >
                  <IoHomeOutline />
                  <span className="nav__link-name">صفحه اصلی</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav__link active" : "nav__link"
                  }
                >
                  <GiAstronautHelmet />
                  <span className="nav__link-name">درباره من</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "nav__link active" : "nav__link"
                  }
                >
                  <AiOutlineFundProjectionScreen />
                  <span className="nav__link-name">پروژه ها</span>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav__link active" : "nav__link"
                  }
                >
                  <MdOutlineMail />
                  <span className="nav__link-name">ایمیل</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <NavLink to="http://195.88.208.124" target="_blank">
            <FaRegNewspaper className="blog" />
          </NavLink>

          <ThemeToggleButton className="toggle" />
        </div>
      </aside>

      <ul className="mobile__nav-list">
        <li className="mobile__nav-item">
          <NavLink to="/" className="mobile__nav-links grid" end>
            <div className="mobile__nav-icon">
              <IoHomeOutline />
            </div>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <NavLink to="/about" className="mobile__nav-links grid">
            <div className="mobile__nav-icon">
              <GiAstronautHelmet />
            </div>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <NavLink to="/projects" className="mobile__nav-links grid">
            <div className="mobile__nav-icon">
              <AiOutlineFundProjectionScreen />
            </div>
          </NavLink>
        </li>
        <li className="mobile__nav-item">
          <NavLink to="/contact" className="mobile__nav-links grid">
            <div className="mobile__nav-icon">
              <MdOutlineMail />
            </div>
          </NavLink>
        </li>
        <li className="mobile__nav-item flex">
          <NavLink
            to="http://195.88.208.124"
            title="وبلاگ تکنولوژی"
            target="_blank"
          >
            <FaRegNewspaper className="mobile__nav-links blog" />
          </NavLink>
          <ThemeToggleButton className="mobile__theme-toggle" />
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
