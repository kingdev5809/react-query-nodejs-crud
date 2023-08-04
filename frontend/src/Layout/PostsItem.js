/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import {
  Card,
  CardBody,
  DeleteBtn,
  EditBtn,
  Buttons,
  Figure,
  Header2,
  Icon,
  Image,
  ReadMore,
  Span,
} from "./Styles";
import { useDeletePost } from "../Services";

function PostsItem({ item, setAddModalVisible, setData }) {
  const handleUpdate = () => {
    setData(item);
    setAddModalVisible(true);
  };
  const { isDeleting, isSuccessDeleting, DeletePost } = useDeletePost();
  const handleDeletePost = (id) => {
    DeletePost(id);
  };

  useEffect(() => {
    if (isDeleting) {
      return <h1>Deleting...</h1>;
    }
  }, [isDeleting]);

  useEffect(() => {
    if (isSuccessDeleting) {
      window.location.reload();
    }
  }, [isSuccessDeleting]);

  return (
    <>
      <Card>
        <div>
          <Figure>
            <Image src={item.image} alt="" />
            <Buttons>
              <EditBtn onClick={handleUpdate}>
                <BiEdit />
              </EditBtn>
              <DeleteBtn onClick={() => handleDeletePost(item._id)}>
                <MdDeleteOutline />
              </DeleteBtn>
            </Buttons>
          </Figure>

          <CardBody>
            <Header2>{item.title}</Header2>

            <p>{item.text}</p>
            <ReadMore href="/">
              Read more <Span>about this is some title</Span>
              <Icon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </ReadMore>
          </CardBody>
        </div>
      </Card>
    </>
  );
}

export default PostsItem;
