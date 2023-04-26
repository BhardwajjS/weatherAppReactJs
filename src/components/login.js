import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.setItem("token", true);
    navigate("/home");
  };
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center ">
      <div className="bg-dark text-center text-light w-50 py-5">
        <form>
          <h2 className="text-center text-uppercase my-2">Login</h2>
          <input
            type="text"
            name="email"
            className="my-2"
            placeholder="Enter Email"
            required
          />
          <br />
          <input
            type="password"
            name="pswd"
            className="my-2"
            placeholder="Enter Password"
            required
          />
          <br />
          <button type="submit"
            className="btn btn-primary my-2"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
