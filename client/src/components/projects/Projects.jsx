import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ReactMarkdown from "react-markdown";

import Image1 from "../../assets/portfolio-1-1.png";
import Image2 from "../../assets/portfolio-1-2.png";
import Image3 from "../../assets/portfolio-2-1.png";
import Image4 from "../../assets/portfolio-2-2.png";

import "./projects.css";
import "swiper/css";

const data = [
  {
    id: 1,
    image: [Image1, Image2, Image3, Image4],
    title: "پروژه پورتفولیو",
    description:
      "فرانت اند: در بخش ui این پروژه از react استفاده شده است تا وبسایتی کامپوننت محور بسازد و با وجود فریموورک هایی که در ریکت وجود دارد پروژه را گسترده تر کند. nodejs در بک اند برای ارسال ایمیل کاربر و در بخش وبلاگ برای گرفتن اطلاعات پست ها استفاده شده است",
  },
];

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">پروژه ها</h2>

      <div className="projects__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="projects__card grid" key={id}>
              <Swiper
                className="section__img"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
              >
                {image.map((photoUrl, index) => (
                  <SwiperSlide key={index}>
                    <span className="note">عکس را به سمت چپ یا راست بکشید</span>
                    <img
                      className="projects__img"
                      src={photoUrl}
                      alt={`اسلاید شماره ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="projects__box">
                <h3 className="projects__title">{title}</h3>
                <div className="projects__tags">
                  <div className="tag tag-1">
                    <span>HTML</span>
                  </div>
                  <div className="tag tag-2">
                    <span>CSS</span>
                  </div>
                  <div className="tag tag-3">
                    <span>Raect</span>
                  </div>
                  <div className="tag tag-4">
                    <span>node.js</span>
                  </div>
                </div>
                <p className="projects__description">
                  <ReactMarkdown>{description}</ReactMarkdown>
                </p>
                <div className="projects__btns">
                  <a
                    href="https://baharvandiaboalfazl.github.io/portfolio/"
                    className="projects__btn"
                  >
                    <span>صفحه پروژه &gt;&gt;</span>
                  </a>
                  <a
                    href="https://github.com/baharvandiaboalfazl/portfolio"
                    className="projects__icon"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
