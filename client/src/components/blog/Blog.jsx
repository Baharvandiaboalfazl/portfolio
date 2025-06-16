import React from "react";
import PostList from "../posts/postList";
import SearchInput from "../search/SearchInput";
import { BlogProvider } from "../../context/BlogContext";
import CategoryFilter from "../category/CategoryFilter";

const Blog = () => {
  return (
    <BlogProvider>
      <section className="blog container section" id="blog">
        <SearchInput />
        <h2 className="section__title">پست های اخیر</h2>

        <CategoryFilter />

        <PostList />
      </section>
    </BlogProvider>
  );
};

export default Blog;
