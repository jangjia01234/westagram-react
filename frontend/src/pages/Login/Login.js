import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Login/Login.scss";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let loginIdInput = document.querySelector(".id-input");
    let loginPwInput = document.querySelector(".pw-input");
    let loginBtn = document.querySelector(".login-btn");

    // 키 이벤트 감지 -> 버튼 활성화

    function checkInput() {
      if (loginIdInput.value && loginPwInput.value) {
        loginBtn.style.backgroundColor = "#5395e9";
        loginBtn.style.cursor = "pointer";
        loginBtn.disabled = false;
      } else {
        loginBtn.style.backgroundColor = "#c5e1fa";
        loginBtn.disabled = true;
      }
    }

    // ID, PW validation

    function checkLetter() {
      loginIdInput.value.includes("@") && loginPwInput.value.length >= 5
        ? navigate("/main")
        : alert("아이디 혹은 패스워드를 확인해주세요.");
    }

    loginIdInput.addEventListener("keydown", checkInput);
    loginPwInput.addEventListener("keydown", checkInput);
    loginBtn.addEventListener("click", checkLetter);
  });

  return (
    <div className="Login">
      <div className="body">
        <div className="layout">
          <h1 className="login-logo">westagram</h1>
          <div className="login-box">
            <div className="login-input">
              <input
                className="id-input"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="pw-input"
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <div className="login-btn-box">
              <button className="login-btn">로그인</button>
            </div>
          </div>
          <Link to="#">
            <h6>비밀번호를 잊으셨나요?</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
