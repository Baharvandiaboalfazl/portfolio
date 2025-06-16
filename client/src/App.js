import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Sidebar from "./components/sidebar/Sidebar";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import PostPage from "./components/posts/PostPage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<PostPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Sidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
