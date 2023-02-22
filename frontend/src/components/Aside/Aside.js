import React from "react";
import { Link } from "react-router-dom";

import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Aside/Aside.scss";

import ProfileImg from "../../assets/Main/profile.png";
import MyImg from "../../assets/Main/me.png";
import CatJumpImg from "../../assets/Main/profile3.png";
import CatPixelImg from "../../assets/Main/cat.png";
import FigmaImg from "../../assets/Main/figma.png";
import ProfileIllustImg from "../../assets/Main/profile4.png";

const Aside = () => {
  return (
    <div className="aside">
      <div className="profile-box">
        <div className="profile-toggle-img">
          <img alt="profile" src={ProfileImg} />
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
              <img alt="recommend-profile" src={MyImg} />
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
              <img alt="recommend-profile" src={ProfileIllustImg} />
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
              <img alt="recommend-profile" src={CatPixelImg} />
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
              <img alt="recommend-profile" src={FigmaImg} />
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
              <img alt="recommend-profile" src={CatJumpImg} />
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
              <img alt="recommend-profile" src={ProfileImg} />
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
