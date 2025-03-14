import React from "react";
import "../index.css";
import { Link, useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const toSignin = () => {
    navigate("/signin");
  };
  const toRegister = () => {
    navigate("/register");
  };
  return (
    <div className="headerContainer row " style={{ marginBottom: "1rem" }}>
      <Link
        id="logo"
        className="text-dark text-decoration-none col-sm-12 col-md-3 col-lg-3 my-1 "
        to="/home"
      >
        <div>
          <img src="pictures/logo.png" style={{ height: "2vw" }} alt="logo" />
          <span id="wandersphereLogo">WanderSphere</span>
        </div>
      </Link>
      <ul className="header4links col-sm-12 col-md-6 col-lg-6 my-1">
        <li>
          <Link className=" text-dark text-decoration-none mx-4" to="/home">
            HOME
          </Link>
        </li>
        <li>
          <Link className=" text-dark text-decoration-none mx-4" to="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="text-dark text-decoration-none mx-4" to="/tour">
            TOUR
          </Link>
        </li>
        {/* <li>
          <Link className="text-dark text-decoration-none mx-4" to="/blog">
            BLOG
          </Link>
        </li> */}
        <li>
          <Link className="text-dark text-decoration-none mx-4" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="col-sm-12 col-md-3 col-lg-3  d-flex justify-content-center my-1 ">
        <button
          type="button"
          className="btn btn-dark rounded-4 btn-sm"
          onClick={toSignin}
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            fontSize: "10px",
          }}
        >
          Sign in
        </button>
        <button
          type="button"
          className="btn btn-dark rounded-4 btn-sm"
          onClick={toRegister}
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            fontSize: "10px",
            marginLeft: "1rem",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
