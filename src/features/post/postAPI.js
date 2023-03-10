import axios from "../../utils/axios";

const getPost = async (postId) => {
  const response = await axios.get(`/blogs/${postId}`);
  return response.data;
};

export default getPost;
