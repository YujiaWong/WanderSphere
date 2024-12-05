import React, { useContext } from "react";
import "./index.scss";
import { AuthContext } from "../../context/authContext";

export default function Stories() {
  const { currentUser } = useContext(AuthContext);
  //temporary data
  const stories = [
    {
      id: 1,
      name: "john1",
      img: "https://www.firstbeat.com/wp-content/uploads/2019/09/header-blog-ukfitnessday.jpg",
    },
    {
      id: 2,
      name: "john2",
      img: "https://www.firstbeat.com/wp-content/uploads/2019/09/header-blog-ukfitnessday.jpg",
    },
    {
      id: 3,
      name: "john3",
      img: "https://images.theconversation.com/files/629407/original/file-20241031-17-xs2y3b.jpg?ixlib=rb-4.1.0&rect=26%2C313%2C4243%2C2118&q=45&auto=format&w=668&h=324&fit=crop",
    },
    {
      id: 4,
      name: "john3",
      img: "https://images.theconversation.com/files/629407/original/file-20241031-17-xs2y3b.jpg?ixlib=rb-4.1.0&rect=26%2C313%2C4243%2C2118&q=45&auto=format&w=668&h=324&fit=crop",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profileImg} alt="." />
        <span>{currentUser.userName}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="." />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}
