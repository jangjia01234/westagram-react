import React from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Aside/Aside.scss";
import profileImg from "../../assets/Main/profile.png";

const Aside = () => {
  return (
    <div className="Aside">
      <div className="profile-box">
        <div className="profile-toggle-img">
          <img alt="profile" src={profileImg} />
        </div>
        <div className="profile-toggle-box">
          <div className="profile-toggle-box-up">
            <i class="fa-regular fa-user"> 프로필</i>
            <i class="fa-regular fa-bookmark"> 북마크</i>
            <i class="fa-regular fa-gear"> 설정</i>
          </div>
          <Link className="profile-toggle-box-down" to=""></Link>
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
          회원님을 위한 추천 <Link to="">모두 보기</Link>
        </div>
        <div className="recommend-bottom">
          <div className="recommend-individual">
            <div className="recommend-individual-left">
              <img alt="recommend-profile" src={profileImg} />
              <div className="recommend-individual-middle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommend-individual-right">
              팔로우
            </Link>
          </div>
          <div className="recommend-individual">
            <div className="recommend-individual-left">
              <img alt="recommend-profile" src={profileImg} />
              <div className="recommend-individual-middle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommend-individual-right">
              팔로우
            </Link>
          </div>
          <div className="recommend-individual">
            <div className="recommend-individual-left">
              <img alt="recommend-profile" src={profileImg} />
              <div className="recommend-individual-middle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommend-individual-right">
              팔로우
            </Link>
          </div>
          <div className="recommend-individual">
            <div className="recommend-individual-left">
              <img alt="recommend-profile" src={profileImg} />
              <div className="recommend-individual-middle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommend-individual-right">
              팔로우
            </Link>
          </div>
          <div className="recommend-individual">
            <div className="recommend-individual-left">
              <img alt="recommend-profile" src={profileImg} />
              <div className="recommend-individual-middle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommend-individual-right">
              팔로우
            </Link>
          </div>
          <div className="recommend-individual">
            <div className="recommend-individual-left">
              <img alt="recommend-profile" src={profileImg} />
              <div className="recommend-individual-middle">
                <div>joaaahye</div>
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
          소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 · 약관
          · 위치 · 언어
        </p>
        <p>© 2023 INSTAGRAM FROM META</p>
      </footer>
    </div>
  );
};

export default Aside;
