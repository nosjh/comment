import React from "react";
import { List } from "react-virtualized";
import CommentListItem from "./CommentListItem";
import { useCallback } from "react";
import "../styles/CommentList.scss";

function CommentList({ comments, onRemove }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const comment = comments[index];
      return (
        <CommentListItem
          comment={comment}
          key={key}
          onRemove={onRemove}
          style={style}
        />
      );
    },
    [onRemove, comments]
  );
  return (
    <List
      className="CommentList"
      width={800}
      height={600}
      rowCount={comments.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={comments}
      style={{ outline: "none" }}
    />
  );
}

export default React.memo(CommentList);
