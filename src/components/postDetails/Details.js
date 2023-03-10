import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "./../../features/update/updateSlice";

const Details = ({ post, postId }) => {
  const dispatch = useDispatch();
  const { title, description, likes, image, isSaved, tags } = post;
  const [postLikes, setPostLikes] = useState(likes);
  const [saved, setSaved] = useState(isSaved);

  const handlelike = () => {
    const updatedData = {
      ...post,
      likes: postLikes + 1,
    };
    setPostLikes(postLikes + 1);
    dispatch(updatePost(updatedData));
  };

  const handleSaveButton = () => {
    if (!saved) {
      const updatedData = {
        ...post,
        isSaved: true,
      };
      setSaved(!saved);
      dispatch(updatePost(updatedData));
    }
  };

  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.length > 0
            ? tags.map((tag, i) => {
                return (
                  <span key={i}>
                    #{tag}
                    {i < tags.length - 1 ? ", " : " "}
                  </span>
                );
              })
            : null}
        </div>
        <div className="btn-group">
          <button
            className="like-btn"
            id="lws-singleLinks"
            onClick={handlelike}
          >
            <i className="fa-regular fa-thumbs-up"></i> {postLikes}
          </button>

          <button
            className={`${saved ? "active" : ""} save-btn`}
            id="lws-singleSavedBtn"
            onClick={handleSaveButton}
          >
            <i className="fa-regular fa-bookmark "></i>
            {saved ? "Saved" : "unsaved"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default Details;
