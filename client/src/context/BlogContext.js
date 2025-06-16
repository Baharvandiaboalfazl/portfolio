import React, { createContext, useContext } from "react";
import { useBlogData } from "../hooks/useBlogData";

const BlogContext = createContext();

export const useBlog = () => {
  return useContext(BlogContext);
};

export const BlogProvider = ({ children }) => {
  const blogData = useBlogData();

  return (
    <BlogContext.Provider value={blogData}>{children}</BlogContext.Provider>
  );
};
