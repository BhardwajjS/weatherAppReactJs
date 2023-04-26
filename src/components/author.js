import React, { useState,useEffect   } from "react";
import Navbar from "./navbar";
import { createSearchParams, useNavigate } from "react-router-dom";

const Author = () => {
  const [author, setAuthor] = useState([]);
  const navigate = useNavigate();
  const openProfile = (data) => {
      navigate({
        pathname: `/profile/${data.id}`,
        search: createSearchParams({
            firstName:data.firstName,
            lastName:data.lastName,
            id:data.id
        }).toString()
      });
  };
  const fetchAuthors = () => {
    fetch(`https://dummyapi.io/data/v1/user`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "app-id": "64410c2931ab7a76c5653f1b",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((auth) => {
        setAuthor(auth.data);
      });
  };
  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="row  w-100">
          {author.map((data,index) => (
            <div className="d-flex flex-column align-items-center p-2 key={index} col-4" key={index}>
              <div className="border d-flex flex-column align-items-center p-5">
                <img src={data.picture} className="h-50 w-50" alt="profilepicture" />
                <h2 className="text-center my-3">
                  {" "}
                  {data.firstName} {data.lastName}
                </h2>
                <button onClick={()=>(openProfile(data))} className="btn btn-primary">
                  Click to view Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Author;
