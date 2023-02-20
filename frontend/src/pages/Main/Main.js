import React from "react";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Main/Main.scss";
import "../../pages/Test.css";
import Nav from "../../components/Nav/Nav";
import Article from "../../components/Article/Article";
import Aside from "../../components/Aside/Aside";
import ProfileImg from "../../assets/Main/profile.png";

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
              <img alt="profile" src={ProfileImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileImg} />
            </div>
            <div>
              <img alt="profile" src={ProfileImg} />
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
