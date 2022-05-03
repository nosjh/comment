import React from "react";
import "../styles/CommentListItem.scss";

function CommentListItem({ comment, onRemove }) {
  const { id } = comment;

  return (
    <div className="CommentListItem-virtualized">
      <div className="CommentListItem">
        <div className="remove" onClick={() => onRemove(id)}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CommentListItem);
