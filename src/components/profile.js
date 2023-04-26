import React, { useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import "./profile.css";
export const Profile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [postDetails, setPostDetails] = useState([]);
  const id = searchParams.get("id");
  const fName = searchParams.get("firstName");
  const lName =searchParams.get("lastName");
  const name = fName+" "+lName;
  const [noOfPosts,setNoOfPosts]=useState();
    
  const postList = () => {
    fetch(`https://dummyapi.io/data/v1/user/${id}/post`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "app-id": "64410c2931ab7a76c5653f1b",       
      },
    })
      .then(async (response) => {
        let arr = await response.json();
        setPostDetails(arr.data);
       
        setNoOfPosts(arr.data.length);
    });
  }; 

  const openPost = (data) => {
      navigate({
          pathname:`/post/${data.id}`,
          search : createSearchParams({
            id:data.id
        }).toString()
      });
  };
  useEffect(() => {
    postList();
  }, []);

  return (
    <div>
        <Navbar/>
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-center bg-dark text-light p-4 mt-2 mb-0 w-50 ">{name}</h1>
            <h3 className="text-center bg-dark text-light pb-4 w-50 ">Posts : {noOfPosts}</h3>
        </div>
      
        <div className="row w-100 p-5">
          {postDetails &&
            postDetails?.map((data,index) => (
              <div className="col-6  border border-2 my-3 post-div" key={index}>
                <div className="row h-100">
                  <div className="col-3 p-0">
                    <img src={data.image} alt="image" className="post-img w-100 h-100" />
                  </div>
                  <div className="col-9 d-flex align-items-center justify-content-center flex-column">
                    <h3 className="text-capitalize">{data.text}</h3>
                    <button className="btn btn-primary mt-2" onClick={()=>{
                        openPost(data)  
                    }}>Read Full Article...</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
};
