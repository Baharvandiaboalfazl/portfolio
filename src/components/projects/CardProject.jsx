import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ReactMarkdown from "react-markdown";
import { GrGithub } from "react-icons/gr";
import "../../pages/projects.css";
import data from "./ProjectData";
import { Link } from "react-router-dom";

const CardProject = () => {
  return (
    <div className="projects__container grid">
      {data.map(({ id, image, title, description, tags, links }) => {
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
            <div className="projects__header">
              <h3 className="projects__title">{title}</h3>
              <div className="projects__tags">
                {tags.map((tag) => (
                  <div className="tag">
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
              <p className="projects__description">
                <ReactMarkdown>{description}</ReactMarkdown>
              </p>
            </div>
            <div className="projects__btns">
              <Link
                to={links.github}
                className="projects__icon"
                target="_blank"
              >
                <GrGithub className="github" />
              </Link>
              <Link to={links.live} className="projects__btn" target="_blank">
                <span>صفحه پروژه &gt;&gt;</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProject;
