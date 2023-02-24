import React from "react";

import "../Main/Main.scss";

import Nav from "../../components/Nav/Nav";
import Article from "../../components/Article/Article";
import Aside from "../../components/Aside/Aside";
import Story from "../../components/Story/Story";

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mainBox">
        <div className="mainLeft">
          <Story />
          <Article />
          <Article />
          <Article />
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Main;
