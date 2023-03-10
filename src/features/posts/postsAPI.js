import axios from "../../utils/axios";

const getPosts = async () => {
  const response = await axios.get("/blogs/");
  return response.data;
};

export default getPosts;
