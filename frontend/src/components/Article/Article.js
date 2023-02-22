import React from "react";
import { Link } from "react-router-dom";

import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Article/Article.scss";
import "../../pages/Test.css";

import SeaImg from "../../assets/Main/sea.png";
import FeedProfileImg from "../../assets/Main/profile2.png";

const Article = () => {
  return (
    <div className="article">
      <article>
        <div className="feeds-upside">
          <div className="feeds-upside-left">
            <img alt="profile" src={FeedProfileImg} />
            <Link className="feeds-nickname" to="">
              photo_stagram
            </Link>
            <span className="feeds-content-time">· 1시간</span>
          </div>
          <i class="fa-solid fa-ellipsis"></i>
        </div>

        <img className="feeds-content-photo" alt="feeds" src={SeaImg} />

        <div className="feeds-bottom">
          <div className="feeds-icon">
            <div className="feeds-icon-left">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment icon-chat"></i>
              <i class="fa-regular fa-paper-plane"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>
          <div className="feeds-like">
            <strong>animal_love</strong>
            <span>님 </span>
            <strong>
              외 <strong className="feeds-like-number">70</strong>명
            </strong>
            이 좋아합니다
          </div>
          <div className="feeds-content-box">
            <Link to="">
              <strong>photo_stagram </strong>
            </Link>
            동해 바다의 윤슬...
            <Link to="">더보기</Link>
          </div>
          <div className="feeds-comment-box">
            <div className="feeds-old-comment">
              <div>
                <Link to="">
                  <strong>fullmoon_e </strong>윤슬이 예쁘네요!
                </Link>

                <i class="fa-regular fa-heart icon-mini"></i>
              </div>
              <div className="feeds-new-comment"></div>
            </div>
          </div>
        </div>
        <div className="feeds-comment-input-box">
          <input className="feeds-comment-input" placeholder="댓글 달기..." />
          <button className="feeds-comment-upload">게시</button>
        </div>
      </article>
    </div>
  );
};

export default Article;
