import { useState, useEffect } from "react";
import axios from "axios";

export const usePost = (postId) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!postId) {
      setLoading(false);
      setError("شناسه پست نامعتبر است.");
      return;
    }

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(
          `/api/posts/${postId}`
        );
        setPost(response.data);
      } catch (err) {
        setError("پست مورد نظر یافت نشد یا خطایی رخ داد.");
        console.error("خطا در دریافت پست :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return { post, loading, error };
};
