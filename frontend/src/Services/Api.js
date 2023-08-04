import axios from "axios";

const url = "http://localhost:5000/";

export const API = axios.create({
  baseURL: url,
});

export const getAllPosts = async (signal) => {
  const res = await API.get("post", { signal });
  return res.data;
};
export const AddPost = async (data) => {
  const res = await API.post("post", {
    title: data.title,
    text: data.text,
    image: data.image || "https://picsum.photos/id/1011/800/450",
  });
  return res.data;
};

export const UpdatePostfn = async (data) => {
  const res = await API.post(`post/edit/${data._id}`, data);
  console.log(res.data);
  return res.data;
};
export const DeletePostfn = async (id) => {
  const res = await API.delete(`post/${id}`);
  console.log(res.data);
};
