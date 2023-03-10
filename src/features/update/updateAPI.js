// import axios from "../../utils/axios";

const updatePostNow = async (data) => {
  const id = data.id;

  const res = await fetch(`http://localhost:9000/blogs/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ ...data }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return res.true;
};

export default updatePostNow;
