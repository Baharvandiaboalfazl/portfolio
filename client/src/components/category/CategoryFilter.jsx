import React from "react";
import { useBlog } from "../../context/BlogContext";

import "./categoryFilter.css";

const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } = useBlog();

  const activeStyle = {
    backgroundColor: "#007bff",
    color: "white",
    borderColor: "#007bff",
  };

  const defaultStyle = {
    backgroundColor: "transparent",
    borderColor: "gray",
    cursor: "pointer",
  };

  return (
    <div className="category__container">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className="category__btn"
          style={{
            padding: "8px 12px",
            margin: "0 5px",
            border: "1px solid",
            borderRadius: "20px",
            ...(category === selectedCategory ? activeStyle : defaultStyle),
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
