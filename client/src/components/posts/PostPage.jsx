import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { usePost } from "../../hooks/usePost";

const PostPage = () => {
  const { postId } = useParams();

  const { post, loading, error } = usePost(postId);

  if (loading) {
    return <div className="post__message">در حال بارگذاری پست...</div>;
  }

  if (error) {
    return (
      <div className="section__post">
        <p className="post__message">{error}</p>
        <Link to="/blog" className="post__backLink">
          &rarr; بازگشت به وبلاگ
        </Link>
      </div>
    );
  }

  if (!post) {
    return <div className="post__message">پستی برای نمایش وجود ندارد.</div>;
  }

  return (
    <div className="section__post">
      <Link to="/blog" className="post__backLink">
        &larr; بازگشت به وبلاگ
      </Link>
      <h1 className="post__title">{post.title}</h1>
      <div className="post__meta">
        {post.category && <span>دسته بندی: {post.category}</span>}
        {post.date && <span>تاریخ: {post.date}</span>}
      </div>
      {post.image && (
        <img src={post.image} alt={post.title} className="post__image" />
      )}
      <div className="post__body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostPage;
