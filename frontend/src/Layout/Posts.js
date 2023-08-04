import React, { useState } from "react";
import PostsItem from "./PostsItem";
import { AddBtn, Cards } from "./Styles";
import { useAddPost, useGetPosts } from "../Services";
import AddPostModal from "./AddPostModal";

function Posts() {
  const { posts, isLoading, isError, error } = useGetPosts();
  const [data, setData] = useState({
    title: "",
    text: "",
    image: "",
  });
  const [AddModalVisible, setAddModalVisible] = useState(false);

  return (
    <div>
      <AddBtn onClick={() => setAddModalVisible(true)}>
        <span>Add Post</span>
      </AddBtn>
      <Cards>
        {isLoading && <h1>Loading...</h1>}
        {posts
          ?.map((item) => (
            <PostsItem
              key={item._id}
              setAddModalVisible={setAddModalVisible}
              setData={setData}
              item={item}
            />
          ))
          .reverse()}
      </Cards>
      {AddModalVisible && (
        <AddPostModal
          setAddModalVisible={setAddModalVisible}
          setData={setData}
          data={data}
        />
      )}
    </div>
  );
}

export default Posts;
