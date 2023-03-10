import { Link } from "react-router-dom";

const SingleRelatedPost = ({ post }) => {
  const { image: img, createdAt, title, tags, id } = post;
  return (
    <div className="card">
      <Link to={`/post/${id}`}>
        <img src={img} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/post/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags lws-tags">
          {tags?.length > 0
            ? tags.map((tag, i) => {
                return (
                  <div key={i}>
                    #{tag}
                    {i < tags.length - 1 ? "," : ""}
                  </div>
                );
              })
            : null}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default SingleRelatedPost;
