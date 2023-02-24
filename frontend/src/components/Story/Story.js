import React from "react";

import "./Story.scss";

import ProfileImg from "../../assets/Main/profile.png";
import MyImg from "../../assets/Main/me.png";
import CatJumpImg from "../../assets/Main/profile3.png";
import CatPixelImg from "../../assets/Main/cat.png";
import FigmaImg from "../../assets/Main/figma.png";
import ProfileIllustImg from "../../assets/Main/profile4.png";

const Story = () => {
  return (
    <div className="story">
      <header>
        <img alt="profile" src={ProfileImg} />
        <img alt="profile" src={CatJumpImg} />
        <img alt="profile" src={CatPixelImg} />
        <img alt="profile" src={MyImg} />
        <img alt="profile" src={FigmaImg} />
        <img alt="profile" src={ProfileIllustImg} />
        <img alt="profile" src={CatJumpImg} />
        <img alt="profile" src={CatPixelImg} />
        <img alt="profile" src={MyImg} />
        <img alt="profile" src={FigmaImg} />
        <img alt="profile" src={ProfileIllustImg} />
      </header>
    </div>
  );
};

export default Story;
