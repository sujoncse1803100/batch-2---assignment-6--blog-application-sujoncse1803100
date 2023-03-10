import { useEffect } from "react";
import Aside from "../aside/aside";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./../../features/posts/postsSlice";

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts).posts;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section className="wrapper">
      <Aside />
      <main className="post-container" id="lws-postContainer">
        {posts?.length > 0 ? (
          posts.map((post) => <Post post={post} key={post.id} />)
        ) : (
          <div>Post Not Found !!!</div>
        )}
      </main>
    </section>
  );
};

export default Main;
