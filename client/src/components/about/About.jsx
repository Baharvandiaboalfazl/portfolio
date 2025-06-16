import React from "react";
import "./about.css";
import Avatar from "../../assets/me.png";
import AboutBox from "./AboutBox";
import Education from "./Education";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">درباره من</h2>

      <div className="about__container grid">
        <img src={Avatar} alt="Profile" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              من یک توسعه‌دهنده فرانت هستم که علاقه زیادی به برنامه نویسی دارم
              این علاقه رو از بچگی با خودم دارم. مسیر من در سمت یادگیری برنامه
              نویسی با شوق ساختن یک وبسایت شخصی شروع شد. مسیر زندگی من به سمت
              توسعه دهننده فرانت اند شدن تغییر داد و در دنیای بزرگ برنامه نویسی
              به رویم باز شد.
            </p>
            <a
              href="../../assets/resume.pdf"
              download="resume.pdf"
              className="about__btn btn"
            >
              <div>
                <span>دانلود رزومه</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>

          <div className="about__skills grid">
            {AboutBox.map((elem) => {
              const { id, title, icon, desc } = elem;
              return (
                <div className="skills__card" key={id}>
                  <i className={icon} />

                  <div>
                    <div className="skills__titles">
                      <h3 className="skills__name">{title}</h3>
                      <div className="skills__bar">
                        <span className="skills__percentage photography"></span>
                      </div>
                      <span className="skills__number">{desc}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Education />
        </div>
      </div>
    </section>
  );
};

export default About;
