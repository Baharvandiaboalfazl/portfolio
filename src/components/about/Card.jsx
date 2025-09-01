import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { SlWrench } from "react-icons/sl";
import "./education.css";

const Card = (props) => {
  return (
    <div className="education__item">
      {props.icon}
      <span className="education__date">{props.year}</span>
      <h3 className="education__title">{props.title}</h3>
      <p className="education__desc">{props.desc}</p>
    </div>
  );
};

export default Card;
