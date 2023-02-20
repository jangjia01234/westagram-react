import React from "react";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import Nav from "../../components/Nav/Nav";
import Aside from "../../components/Aside/Aside";

const Main = () => {
  return (
    <div className="Main">
      <Nav />
      <h1>메인</h1>
      <Aside />
    </div>
  );
};

export default Main;
