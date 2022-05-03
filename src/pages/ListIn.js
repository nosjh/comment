import React, { useRef, useCallback, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentInsert from "../components/CommentInsert";
import CommentList from "../components/CommentList";
import "../styles/ListIn.scss";

const data = {
  list01: {
    name: "2022년 5월 공지사항",
    desc: "개인 및 기업 사용자에게 무료로 제공됩니다. 웹디자인, 출판, 웹폰트, CI/BI 제작, 영상 제작 및 자막, 소프트웨어의 번들, 특정 프로그램의 임베드 등에 자유롭게 이용하실 수 있습니다. 단, 폰트 자체를 유료로 판매하는 행위는 금지합니다. 카페24 폰트를 사용한 결과물은 카페24의 프로모션을 위해 활용될 수 있습니다. 이를 원치 않는 사용자는 언제든지 당사로 연락 주시기 바랍니다.",
  },
  list02: {
    name: "2022년 4월 공지사항",
    desc: "개인 및 기업 사용자에게 무료로 제공됩니다. 웹디자인, 출판, 웹폰트, CI/BI 제작, 영상 제작 및 자막, 소프트웨어의 번들, 특정 프로그램의 임베드 등에 자유롭게 이용하실 수 있습니다. 단, 폰트 자체를 유료로 판매하는 행위는 금지합니다. 카페24 폰트를 사용한 결과물은 카페24의 프로모션을 위해 활용될 수 있습니다. 이를 원치 않는 사용자는 언제든지 당사로 연락 주시기 바랍니다.",
  },
  list03: {
    name: "2022년 3월 공지사항",
    desc: "개인 및 기업 사용자에게 무료로 제공됩니다. 웹디자인, 출판, 웹폰트, CI/BI 제작, 영상 제작 및 자막, 소프트웨어의 번들, 특정 프로그램의 임베드 등에 자유롭게 이용하실 수 있습니다. 단, 폰트 자체를 유료로 판매하는 행위는 금지합니다. 카페24 폰트를 사용한 결과물은 카페24의 프로모션을 위해 활용될 수 있습니다. 이를 원치 않는 사용자는 언제든지 당사로 연락 주시기 바랍니다.",
  },
  list04: {
    title: "2022년 2월 공지사항",
    desc: "개인 및 기업 사용자에게 무료로 제공됩니다. 웹디자인, 출판, 웹폰트, CI/BI 제작, 영상 제작 및 자막, 소프트웨어의 번들, 특정 프로그램의 임베드 등에 자유롭게 이용하실 수 있습니다. 단, 폰트 자체를 유료로 판매하는 행위는 금지합니다. 카페24 폰트를 사용한 결과물은 카페24의 프로모션을 위해 활용될 수 있습니다. 이를 원치 않는 사용자는 언제든지 당사로 연락 주시기 바랍니다.",
  },
  list05: {
    name: "2022년 1월 공지사항",
    desc: "개인 및 기업 사용자에게 무료로 제공됩니다. 웹디자인, 출판, 웹폰트, CI/BI 제작, 영상 제작 및 자막, 소프트웨어의 번들, 특정 프로그램의 임베드 등에 자유롭게 이용하실 수 있습니다. 단, 폰트 자체를 유료로 판매하는 행위는 금지합니다. 카페24 폰트를 사용한 결과물은 카페24의 프로모션을 위해 활용될 수 있습니다. 이를 원치 않는 사용자는 언제든지 당사로 연락 주시기 바랍니다.",
  },
  list06: {
    name: "2021년 12월 공지사항",
    desc: "개인 및 기업 사용자에게 무료로 제공됩니다. 웹디자인, 출판, 웹폰트, CI/BI 제작, 영상 제작 및 자막, 소프트웨어의 번들, 특정 프로그램의 임베드 등에 자유롭게 이용하실 수 있습니다. 단, 폰트 자체를 유료로 판매하는 행위는 금지합니다. 카페24 폰트를 사용한 결과물은 카페24의 프로모션을 위해 활용될 수 있습니다. 이를 원치 않는 사용자는 언제든지 당사로 연락 주시기 바랍니다.",
  },
};

// ------

function createBulkComments() {
  const array = [];
  for (let i = 1; i <= 3; i++) {
    array.push({
      id: i,
      text: `댓글 ${i}`,
    });
  }

  return array;
}

function commentReducer(comments, action) {
  switch (action.type) {
    case "INSERT":
      return comments.concat(action.comment);
    case "REMOVE":
      return comments.filter((comment) => comment.id !== action.id);
    default:
      return comments;
  }
}

function ListIn() {
  const [comments, dispatch] = useReducer(
    commentReducer,
    undefined,
    createBulkComments
  );

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const comment = {
      id: nextId.current,
      text,
    };
    dispatch({ type: "INSERT", comment });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  // ---------

  const params = useParams();
  const list = data[params.listname];

  // ----------

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goList = () => {
    navigate("/");
  };

  return (
    <div>
      <p className="title">{list.name}</p>
      <div className="desc-container">
        <p className="desc">{list.desc}</p>
      </div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goList}>목록</button>
      <div className="comment-container">
        <CommentInsert onInsert={onInsert} />
        <CommentList comments={comments} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default ListIn;
