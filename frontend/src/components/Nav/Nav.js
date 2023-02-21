import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Nav/Nav.scss";
import "../../pages/Test.css";
import ProfileImg from "../../assets/Main/profile.png";

const Nav = () => {
  const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };

  return (
    <div className="Nav">
      <div className="body">
        <div className="nav">
          <div className={isOpen ? "hide-menu" : "show-menu"}>
            <div className="nav-wrap">
              <div className="nav-wrap-toggle">
                <Link to={""} className="logo-westagram">
                  Westagram
                </Link>
                <div className="nav-middle">
                  <Link className="nav-middle-menu home" to={""}>
                    <i class="fa-solid fa-house"></i>
                    <span>홈</span>
                  </Link>
                  <Link className="nav-middle-menu search" to={""}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span>검색</span>
                  </Link>
                  <Link className="nav-middle-menu explore" to={""}>
                    <i class="fa-regular fa-compass"></i>
                    <span>탐색 탭</span>
                  </Link>
                  <Link className="nav-middle-menu reels" to={""}>
                    <i class="fa-solid fa-video"></i>
                    <span>릴스</span>
                  </Link>
                  <Link className="nav-middle-menu message" to={""}>
                    <i class="fa-regular fa-paper-plane"></i>
                    <span>메세지</span>
                  </Link>
                  <Link className="nav-middle-menu update" to={""}>
                    <i class="fa-regular fa-heart"></i>
                    <span>알림</span>
                  </Link>
                  <Link className="nav-middle-menu update" to={""}>
                    <i class="fa-regular fa-square-plus"></i>
                    <span>만들기</span>
                  </Link>
                  <Link className="nav-middle-menu profile" to={""}>
                    <img
                      className="nav-profile"
                      src={ProfileImg}
                      alt="profile"
                    />
                    <span>프로필</span>
                  </Link>
                  <Link className="nav-middle-menu logout" to={""}>
                    <i
                      class="fa-solid fa-arrow-right-from-bracket"
                      onClick={() => {
                        window.location.href = "/";
                      }}
                    ></i>
                    <span>로그아웃</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bottom">
            <i class="fa-solid fa-bars" onClick={() => toggleMenu()}></i>접기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
