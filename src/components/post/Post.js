import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { image: img, createdAt, title, likes, isSaved, id, tags } = post;

  return (
    <div className="lws-card">
      <Link to={`/post/${id}`}>
        <img src={img} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/post/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags flex">
          {tags?.length > 0
            ? tags.map((tag, i) => {
                return (
                  <div>
                    #{tag}
                    {i < tags.length - 1 ? "," : ""}
                  </div>
                );
              })
            : null}
        </div>
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> {isSaved ? "Saved" : "unsaved"} </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
