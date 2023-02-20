import React from "react";

import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Main/Main.scss";
import "../../pages/Test.css";

import Nav from "../../components/Nav/Nav";
import Article from "../../components/Article/Article";
import Aside from "../../components/Aside/Aside";

import ProfileImg from "../../assets/Main/profile.png";
import MyImg from "../../assets/Main/me.png";
import CatJumpImg from "../../assets/Main/profile3.png";
import CatPixelImg from "../../assets/Main/cat.png";
import FigmaImg from "../../assets/Main/figma.png";
import ProfileIllustImg from "../../assets/Main/profile4.png";

const Main = () => {
  return (
    <div className="Main">
      <Nav />
      <div className="main">
        <div className="main-left">
          <header>
            <div>
              <img alt="profile" src={ProfileImg} />
            </div>
            <div>
              <img alt="profile" src={CatJumpImg} />
            </div>
            <div>
              <img alt="profile" src={CatPixelImg} />
            </div>
            <div>
              <img alt="profile" src={MyImg} />
            </div>
            <div>
              <img alt="profile" src={FigmaImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileIllustImg} />
            </div>
            <div>
              <img alt="profile" src={CatJumpImg} />
            </div>
            <div>
              <img alt="profile" src={CatPixelImg} />
            </div>
            <div>
              <img alt="profile" src={MyImg} />
            </div>
            <div>
              <img alt="profile" src={FigmaImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileIllustImg} />
            </div>
          </header>
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
