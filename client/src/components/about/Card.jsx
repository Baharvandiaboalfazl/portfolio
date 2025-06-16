import React from "react";

const Card = (props) => {
  return (
    <div className="education__item">
      <i className={props.icon}></i>

      <span className="education__date">{props.year}</span>
      <h3 className="education__title">{props.title}</h3>
      <p className="education__desc">{props.desc}</p>
    </div>
  );
};

export default Card;
