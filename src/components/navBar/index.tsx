import React, { useContext } from "react";
import "./index.scss";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../../context/authContext";

export default function NavBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navBar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>WanderSphere</span>
        </Link>
        <AiOutlineHome />

        <AiOutlineAppstore />
        <div className="search">
          <IoSearch />
          <input type="text" placeholder="search for something" />{" "}
        </div>
      </div>
      <div className="right">
        <FaRegUser />
        <MdOutlineMail />
        <FaRegBell />
        <div className="user">
          <img src={currentUser.profileImg} alt=".." />
          <span>{currentUser.userName}</span>
        </div>
      </div>
    </div>
  );
}
