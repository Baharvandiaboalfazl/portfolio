import { useState, useEffect } from "react";
import axios from "axios";
import postsData from "../components/data/posts";

export const useBlogData = () => {
  const [posts, setPosts] = useState(postsData);
  const [allPosts, setAllPosts] = useState(postsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([
    "همه",
    ...new Set(postsData.map((post) => post.category)),
  ]);
  const [selectedCategory, setSelectedCategory] = useState("همه");

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setPosts(data);
          setAllPosts(data);
          const uniqueCategories = [
            "همه",
            ...new Set(data.map((post) => post.category)),
          ];
          setCategories(uniqueCategories);
          console.log("✅ داده‌ها با موفقیت از API دریافت و جایگزین شد.");
        }
      })
      .catch((error) => {
        console.error(
          "⚠️ خطا در اتصال به API. از داده‌های محلی استفاده می‌شود:",
          error.message
        );
      });
  }, []);

  useEffect(() => {
    let filteredPosts = allPosts;
    if (selectedCategory !== "همه") {
      filteredPosts = filteredPosts.filter(
        (post) => post.category === selectedCategory
      );
    }
    if (searchTerm) {
      const normalizedSearchTerm = searchTerm.normalize("NFC").toLowerCase();
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title
            .normalize("NFC")
            .toLowerCase()
            .includes(normalizedSearchTerm) ||
          post.category
            .normalize("NFC")
            .toLowerCase()
            .includes(normalizedSearchTerm)
      );
    }
    setPosts(filteredPosts);
  }, [searchTerm, selectedCategory, allPosts]);

  return {
    posts,
    searchTerm,
    setSearchTerm,
    categories,
    selectedCategory,
    setSelectedCategory,
  };
};
