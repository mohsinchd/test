import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiOrange } from "react-icons/gi";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //   Change Input Handler
  const changeInputHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  };

  //   Form Submit Handler
  const submitFormHandler = (event) => {
    event.preventDefault();

    console.log("Hello world");
  };

  return (
    <div className="card m-auto w-75 bg-light">
      <div className="card-body">
        <h1 className="text-center mineTextOrange ">
          <GiOrange />
          range Application
        </h1>
        <h2 className="text-center mb-3">Sign In!</h2>
        <div className="border-bottom"></div>
        <form onSubmit={submitFormHandler}>
          <div className="form-group m-3">
            <input
              type="email"
              name="email"
              id="email"
              onChange={changeInputHandler}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group m-3">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={changeInputHandler}
              placeholder="Password"
            />
          </div>
          <div className="form-group m-3">
            <button type="submit" className="btn btn-dark w-100">
              Sign In
            </button>
          </div>
          <div className="border-bottom"></div>
        </form>
        <Link to="/sign-up" className="nav-link text-dark text-center m-3">
          Don't Have an Account? Create New!
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
