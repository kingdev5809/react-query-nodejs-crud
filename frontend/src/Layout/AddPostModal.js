import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../Firebase/Firebase";
import {
  AddModal,
  AddModalInner,
  BlackScreen,
  CloseModal,
  Content,
  FormGroup,
  ImageUpload,
  ImageUploadBtn,
  ImageUploadInput,
  Input,
  Label,
  SubmitButton,
} from "./Styles";
import { useAddPost, useUpdatePost } from "../Services";
import { useQueryClient } from "@tanstack/react-query";

function AddPostModal({ setAddModalVisible, data, setData, type }) {
  const inputRef = useRef(null);
  const queryClient = useQueryClient();

  const [imgUrl, setImgUrl] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [loading, setLoading] = useState(false);

  const { isCreating, isSuccessCreating, CreatePost } = useAddPost();
  const { isUpdating, isSuccessUpdating, UpdatePost } = useUpdatePost();
  const handleAddPost = (e) => {
    e.preventDefault();
    if (type === "edit") {
      UpdatePost(data);
      return;
    }
    CreatePost(data);
  };

  useEffect(() => {
    if (isSuccessCreating || isSuccessUpdating) {
      setAddModalVisible(false);
      queryClient.refetchQueries(["post"]);
      // window.location.reload();
    }
  }, [isSuccessCreating, isSuccessUpdating]);

  const upload = () => {
    if (imageUpload == null) {
      return alert("Image must be input!");
    }
    const imageRef = ref(storage, `images/${imageUpload?.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgUrl(url);
        setData({ ...data, image: url });
        setImageUpload(null);
        setLoading(false);
      });
    });
  };

  useEffect(() => {
    if (imageUpload) {
      setLoading(true);
      upload();
    }
  }, [imageUpload]);

  return (
    <AddModal>
      <AddModalInner>
        <CloseModal onClick={() => setAddModalVisible(false)}>
          <AiOutlineClose />
        </CloseModal>
        <Content>
          <FormGroup>
            <Label>Posts Title</Label>
            <Input
              placeholder="Enter post title"
              type="text"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <Label>Posts Text</Label>
            <Input
              placeholder="Enter post text"
              type="text"
              value={data.text}
              onChange={(e) => setData({ ...data, text: e.target.value })}
            />

            <ImageUpload>
              <ImageUploadInput
                type="file"
                onChange={(e) => setImageUpload(e.target.files[0])}
                ref={inputRef}
              />

              <ImageUploadBtn onClick={() => inputRef.current.click()}>
                Upload Image
              </ImageUploadBtn>
              {loading && <h3>Uploading...</h3>}
              {isCreating && <h3>Creating...</h3>}
              {isUpdating && <h3>Updating...</h3>}
            </ImageUpload>
          </FormGroup>
        </Content>
        <SubmitButton onClick={handleAddPost}> Submit</SubmitButton>
      </AddModalInner>
      <BlackScreen onClick={() => setAddModalVisible(false)}></BlackScreen>
    </AddModal>
  );
}

export default AddPostModal;
