import React from "react";
import { useParams } from "react-router-dom";

const data = {
  list01: {
    title: "2022년 5월 공지사항",
  },
  list02: {
    title: "2022년 4월 공지사항",
  },
  list03: {
    title: "2022년 3월 공지사항",
  },
  list04: {
    title: "2022년 2월 공지사항",
  },
  list05: {
    title: "2022년 1월 공지사항",
  },
  list06: {
    title: "2021년 12월 공지사항",
  },
  list07: {
    title: "2021년 11월 공지사항",
  },
};

function List() {
  const params = useParams();
  const list = data[params.listname];

  return (
    <div>
      <div className="title">공지사항</div>
      {list ? <p>{list.title}</p> : <p>삭제된 글입니다</p>}
    </div>
  );
}

export default List;
