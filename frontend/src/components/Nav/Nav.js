import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import ProfileImg from "../../assets/Main/profile.png";
import "../Nav/Nav.scss";

const Nav = () => {
  useEffect(() => {
    // const navElement = document.querySelector("nav");
    // const navWrapToggleElement = document.querySelector(".nav-wrap-toggle");
    // const menuIcon = document.querySelector(".fa-bars");
    // 사이드바 토글
    // menuIcon.addEventListener("click", function () {
    //   navElement.classList.toggle("nav-closed");
    //   navWrapToggleElement.classList.toggle("hide-nav-elements");
    // });
  });

  return (
    <div className="Nav">
      <div className="body">
        <nav>
          <div className="nav-wrap">
            <section className="nav-wrap-toggle">
              <Link to="" className="logo-westagram link">
                Westagram
              </Link>
              <section className="nav-middle">
                <Link className="nav-middle-menu home link" to="">
                  <i className="fa-solid fa-house"></i>
                  <span>홈</span>
                </Link>
                <Link className="nav-middle-menu search link" to="#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <span>검색</span>
                </Link>
                <Link className="nav-middle-menu explore link" to="#">
                  <i className="fa-regular fa-compass"></i>
                  <span>탐색 탭</span>
                </Link>
                <Link className="nav-middle-menu reels link" to="#">
                  <i className="fa-solid fa-video"></i>
                  <span>릴스</span>
                </Link>
                <Link className="nav-middle-menu message link" to="#">
                  <i className="fa-regular fa-paper-plane"></i>
                  <span>메세지</span>
                </Link>
                <Link className="nav-middle-menu update link" to="#">
                  <i className="fa-regular fa-heart"></i>
                  <span>알림</span>
                </Link>
                <Link className="nav-middle-menu post link" to="#">
                  <i className="fa-regular fa-square-plus"></i>
                  <span>만들기</span>
                </Link>
                <Link className="nav-middle-menu link" to="#">
                  <ProfileImg className="nav-profile" alt="icon-profile">
                    프로필
                  </ProfileImg>
                </Link>
                <Link className="nav-middle-menu logout link" to="./login.html">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  로그아웃
                </Link>
              </section>
            </section>
            <section className="nav-bottom">
              <i className="fa-solid fa-bars"></i>접기
            </section>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
