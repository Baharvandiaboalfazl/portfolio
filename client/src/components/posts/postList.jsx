import React from "react";
import PostItem from "./PostItem";
import { useBlog } from "../../context/BlogContext";

import "./posts.css";

const PostList = () => {
  const { posts } = useBlog();

  return (
    <div className="blog__container grid">
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <p className="err__message">
          پستی برای نمایش وجود ندارد یا با مشخصات جستجو شده یافت نشد.
        </p>
      )}
    </div>
  );
};

export default PostList;
