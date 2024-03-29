import React from "react";
import "../Blog/Blog.css";
import wave from "../../assets/Wave1.png";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="blog__wraper">
            <h1 className="blog__heading">Lunar Blog</h1>
            <p className="blog__detail">Digital Marketing Articles</p>
          </div>
        </div>
        <div className="blog__wave">
          <img src={wave} alt={wave} className="wave__img" />
        </div>
      </div>
    </>
  );
};

export default Blog;
