import React from "react";
import Stories from "../../components/stories";
import Posts from "../../components/posts";

export default function BlogHome() {
  return (
    <div className="bloghome">
      <Stories />
      <Posts />
    </div>
  );
}
