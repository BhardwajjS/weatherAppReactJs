import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useSearchParams } from "react-router-dom";
const Post = () => {
  const postId = useSearchParams("id");
  const [postBrief, setPostBrief] = useState([]);
  const fetchPost = () => {
    fetch(`https://dummyapi.io/data/v1/post/${postId}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "app-id": "64410c2931ab7a76c5653f1b",
      },
    })
      .then((res) => {
        console.log("Response",res);
        return res.json();
      })
      .then((res) => {
        setPostBrief(res.data);
      });
      if(postBrief){
        console.log("Post",postBrief);
      }
  };

  useEffect(() => {fetchPost()},[]);
  return (
    <>
      <Navbar />
      <h1>Post Id : {postId}</h1>
    </>
  );
};

export default Post;
