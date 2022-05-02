import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 이전 페이지 이동
  };
  const goList = () => {
    navigate("/list");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goList}>목록</button>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
