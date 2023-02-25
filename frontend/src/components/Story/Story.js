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
    </div>
  );
};

export default Story;
