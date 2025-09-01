import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/spattiall?igsh=NHlweHN5bW1hYTZv"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://t.me/@aboalffazl"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-telegram"></i>
      </a>

      <a
        href="https://github.com/Baharvandiaboalfazl"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="mailto:Baharvandiaboalfazl@gmail.com?subject=Feedback&body=Message"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-solid fa-envelope"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
