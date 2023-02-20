import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Aside/Aside.scss";
import ProfileImg from "../../assets/Main/profile.png";

const Aside = () => {
  useEffect(() => {
    // 프로필 박스 토글
    // const profileImg = document.querySelector(".profile-toggle-img");
    // const profileImgBox = document.querySelector(".profile-toggle-box");
    // profileImg.addEventListener("click", () => {
    //   profileImgBox.classList.toggle("display-block");
    // });
    // profileImgBox.addEventListener("click", (e) => {
    //   e.target
    //     ? profileImgBox.classList.remove("display-block")
    //     : profileImgBox.classList.add("display-block");
    // });
  });

  return (
    <div className="Aside">
      <aside>
        <div className="profile-box">
          <div className="profile-toggle-img">
            <ProfileImg />
          </div>
          <div className="profile-toggle-box">
            <div className="profile-toggle-box-up">
              <i className="fa-regular fa-user"> 프로필</i>
              <i className="fa-regular fa-bookmark"> 북마크</i>
              <i className="fa-regular fa-gear"> 설정</i>
            </div>
            <Link className="profile-toggle-box-down" to="./login.html">
              로그아웃
            </Link>
          </div>

          <div className="profile-box-nickname">
            <Link to="">
              {" "}
              <span className="account-nickname">dazezd_z</span>{" "}
            </Link>
            위코드 43기 교육생
          </div>
        </div>
        <div className="recommend-box">
          <div className="recommend-upside">
            회원님을 위한 추천<Link to="">모두 보기</Link>
          </div>
          <div className="recommend-bottom">
            <div className="recommend-individual">
              <div className="recommend-individual-left">
                <img alt="recommend-profile" src="./img/me.png" />
                <div className="recommend-individual-middle">
                  <div>joaaahye</div>
                  <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
                </div>
              </div>
              <Link to="#" className="recommend-individual-right">
                팔로우
              </Link>
            </div>
            <div className="recommend-individual">
              <div className="recommend-individual-left">
                <img alt="recommend-profile" src="./img/profile2.jpg" />
                <div className="recommend-individual-middle">
                  <div>rampar101</div>
                  <div>fullmoon_e님 외 2명이 팔로우합니다.</div>
                </div>
              </div>
              <Link to="" className="recommend-individual-right">
                팔로우
              </Link>
            </div>
            <div className="recommend-individual">
              <div className="recommend-individual-left">
                <img alt="recommend-profile" src="./img/cat.jpeg" />
                <div className="recommend-individual-middle">
                  <div>shawnjjoo</div>
                  <div>fullmoon_e님이 팔로우합니다.</div>
                </div>
              </div>
              <Link to="" className="recommend-individual-right">
                팔로우
              </Link>
            </div>
            <div className="recommend-individual">
              <div className="recommend-individual-left">
                <img alt="recommend-profile" src="./img/me.jpeg" />
                <div className="recommend-individual-middle">
                  <div>joaaahye</div>
                  <div>fullmoon_endless님이 팔로우합니다.</div>
                </div>
              </div>
              <Link to="" className="recommend-individual-right">
                팔로우
              </Link>
            </div>
            <div className="recommend-individual">
              <div className="recommend-individual-left">
                <img alt="recommend-profile" src="./img/profile2.jpg" />
                <div className="recommend-individual-middle">
                  <div>rampar101</div>
                  <div>fullmoon_e님 외 7명이 팔로우합니다.</div>
                </div>
              </div>
              <Link to="" className="recommend-individual-right">
                팔로우
              </Link>
            </div>
            <div className="recommend-individual">
              <div className="recommend-individual-left">
                <img alt="recommend-profile" src="./img/cat.jpeg" />
                <div className="recommend-individual-middle">
                  <div>shawnjjoo</div>
                  <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
                </div>
              </div>
              <Link to="" className="recommend-individual-right">
                팔로우
              </Link>
            </div>
          </div>
        </div>

        <footer>
          <p>
            소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 ·
            약관 · 위치 · 언어
          </p>
          <p>© 2023 INSTAGRAM FROM META</p>
        </footer>
      </aside>
    </div>
  );
};

export default Aside;
