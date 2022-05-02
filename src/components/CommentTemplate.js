import React from "react";
import "./CommentTemplate.scss";

function CommentTemplate({ children }) {
  return (
    <div className="CommentTemplate">
      <div></div>
      <div>{children}</div>
    </div>
  );
}

export default CommentTemplate;
