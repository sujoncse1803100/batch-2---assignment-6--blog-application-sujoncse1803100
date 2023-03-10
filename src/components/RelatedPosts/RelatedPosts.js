import { useEffect } from "react";
import SingleRelatedPost from "./SingleRelatedPost";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPosts } from "../../features/relatedPosts/relatedPostsSlice";

const RelatedPosts = ({ postId, tags }) => {
  const dispatch = useDispatch();
  const relatedPosts = useSelector((state) => state.relatedPosts).posts;

  useEffect(() => {
    const id = parseInt(postId);
    dispatch(fetchRelatedPosts({ tags, id }));
  }, [dispatch, postId, tags]);

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {relatedPosts?.length > 0 ? (
          relatedPosts.map((post, i) => (
            <SingleRelatedPost key={i} post={post} />
          ))
        ) : (
          <div>No Such Related Post Available !!!</div>
        )}
      </div>
    </aside>
  );
};

export default RelatedPosts;
