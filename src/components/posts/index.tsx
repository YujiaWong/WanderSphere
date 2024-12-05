import React from "react";
import Post from "../post";
import "./index.scss";

export default function Posts() {
  const posts = [
    {
      id: 1,
      name: "孙笑川",
      userId: 1,
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVEHIRD6Xn_KNaud4rPrVUT397HohLueaOQ&s",
      desc: "おっす、俺は孫笑川（そん しょうせん）だ。ネットの住民からは「エモい大将」なんて呼ばれてるが、まあそんな大層なもんじゃねえ。ただの普通の中国人だよ。",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQR2P4FJUtOIWqSqWDNK4YhGYgCFThO6E7Q&s",
    },
    {
      id: 2,
      name: "vivian",
      userId: 2,
      profileImg:
        "https://imgcdn.stablediffusionweb.com/2024/5/15/d12adb3e-ae31-4cc5-a659-5fc8375dc635.jpg",
      desc: "Beautiful!",
      img: "https://koddi.com/wp-content/uploads/2020/01/Understanding-Solo-Travelers-974x511.jpg",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
