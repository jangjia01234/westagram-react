import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Login/Login.scss";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [color, setColor] = useState("#c5e1fa");

  const saveUserId = (e) => {
    setId(e.target.value);
    // if (e.targat.alue.length >= 5) alert("성공");
  };
  const saveUserPw = (e) => {
    setPw(e.target.value);
  };

  // 키 이벤트 감지 -> 버튼 활성화
  const toggleBtnColor = () => {
    id && pw ? setColor("#5395e9") : setColor("#c5e1fa");
  };

  // const navigate = useNavigate();

  // const goToMain = () => {
  //   navigate("/main");
  // };

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
                onChange={saveUserId}
                value={id}
              />
              <input
                className="pw-input"
                type="password"
                placeholder="비밀번호"
                onChange={saveUserPw}
                value={pw}
              />
            </div>
            {/* <Link to="/main"> */}
            <div className="login-btn-box">
              <button
                className="login-btn"
                onClick={toggleBtnColor} // 자동으로 바뀌게 수정 필요
                style={{ backgroundColor: color }}
              >
                로그인
              </button>
            </div>
            {/* </Link> */}
            {/* <button className="login-btn-box" onClick={goToMain}>
              로그인
            </button> */}
          </div>
          <Link to="">
            <h6>비밀번호를 잊으셨나요?</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// useEffect(() => {
//   let loginIdInput = document.querySelector(".id-input");
//   let loginPwInput = document.querySelector(".pw-input");
//   let loginBtn = document.querySelector(".login-btn");

// ID, PW validation
//   function checkLetter() {
//     loginIdInput.value.includes("@") && loginPwInput.value.length >= 5
//       ? navigate("/main")
//       : alert("아이디 혹은 패스워드를 확인해주세요.");
//   }

//   loginIdInput.addEventListener("keydown", checkInput);
//   loginPwInput.addEventListener("keydown", checkInput);
//   loginBtn.addEventListener("click", checkLetter);
// });
