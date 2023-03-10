import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import RelatedPosts from "../RelatedPosts/RelatedPosts";
import Details from "./Details";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./../../features/post/postSlice";

const PostDetails = () => {
  const post = useSelector((state) => state.post).post;
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  const { tags, likes } = post;
  // likes && console.log(likes);

  return (
    <>
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      <section className="post-page-container">
        {likes && <Details post={post} postId={postId} />}
        <RelatedPosts postId={postId} tags={tags} />
      </section>
    </>
  );
};

export default PostDetails;
