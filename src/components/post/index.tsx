import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router";
import { HiDotsHorizontal } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa6";
import { LiaCommentSolid } from "react-icons/lia";
import { IoShareSocialOutline } from "react-icons/io5";
import Comments from "../comments";

export default function Post({ post }: { post: any }) {
  //temporary
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profileImg} alt="." />
            <div className="details">
              <Link
                to={`/blog/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <HiDotsHorizontal />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="."></img>
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FcLike /> : <FaRegHeart />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <LiaCommentSolid />
            12 Comments
          </div>
          <div className="item">
            <IoShareSocialOutline />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
}
