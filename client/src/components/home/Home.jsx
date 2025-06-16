import React from "react";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Shapes from "./Shapes";
import "./home.css";

const Home = () => {
  return (
    <section className="home main__container">
      <div className="intro">
        <div>
          <img src={Me} alt="myself" className="home__img" />
        </div>
        <div className="home__details">
          <div className="home__name text">سلام ابوالفضل بهاروندی هستم</div>
          <h1 className="home__education">توسعه دهنده فرانت اند</h1>

          <HeaderSocials />

          <a href="/contact" className="home__btn btn animated-button">
            <span>بیا همکار شیم</span>
          </a>
        </div>

        <Shapes />
      </div>
    </section>
  );
};

export default Home;
