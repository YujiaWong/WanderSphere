import React, { useContext } from "react";
import "./index.scss";
import { profile } from "console";
import { AuthContext } from "../../context/authContext";

export default function Comments() {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "hahahahaha",
      name: "孙笑川",
      userId: 2,
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVEHIRD6Xn_KNaud4rPrVUT397HohLueaOQ&s",
    },
    {
      id: 2,
      desc: "Sometimes, it's important to take a moment and appreciate yourself. A simple selfie, yet it holds a world of confidence and individuality. Here's to embracing who I am and cherishing the little things that make life beautiful. 🌟📸",
      name: "john",
      userId: 2,
      profileImg:
        "https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profileImg} alt="." />
        <input type="text" placeholder="Leave some comments" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profileImg} alt="." />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
}
