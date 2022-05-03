import React from "react";
import { Link } from "react-router-dom";
import "../styles/List.scss";

function List() {
  return (
    <div>
      <p className="title">공지사항</p>
      <ul>
        <li>
          <Link to="/list/list01">2022년 5월 공지사항</Link>
        </li>
        <li>
          <Link to="/list/list02">2022년 4월 공지사항</Link>
        </li>
        <li>
          <Link to="/list/list03">2022년 3월 공지사항</Link>
        </li>
        <li>
          <Link to="/list/list04">2022년 2월 공지사항</Link>
        </li>
        <li>
          <Link to="/list/list05">2022년 1월 공지사항</Link>
        </li>
        <li>
          <Link to="/list/list06">2021년 12월 공지사항</Link>
        </li>
      </ul>
    </div>
  );
}

export default List;
