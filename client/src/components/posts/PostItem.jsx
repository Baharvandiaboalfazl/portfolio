import React from "react";
import { Link } from "react-router-dom";

import "./posts.css";

const PostItem = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#">
            <span className="blog__category">{post.category}</span>
          </a>

          <img src={post.image} alt={post.title} style={{ width: "100%" }} />
        </div>
        <div className="blog__details">
          <a href="#">
            <h3 className="blog__title">{post.title}</h3>
          </a>
          <div className="blog__meta">
            <span>{post.date}</span>
            <span className="blog__dot">|</span>
            <span>{post.time}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
