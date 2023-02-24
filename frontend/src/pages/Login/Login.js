import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Login/Login.scss";

const Login = () => {
  const [accout, setAccount] = useState({
    id: "",
    password: "",
    // id, pw 초기값 비워두기
  });

  const saveUserAccount = e => {
    setAccount({
      ...accout,
      [e.target.name]: e.target.value,
    });
    // id 입력시 ["id"], pw 입력시 ["password"] 출력
  };

  // account state -> id, pw 입력시 {id: 'dfdf', password: 'dfdf'}

  return (
    <div className="login">
      <div className="body">
        <div className="layout">
          <h1 className="login-logo">westagram</h1>
          <div className="login-box">
            <div className="login-input">
              <input
                className="id-input"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={saveUserAccount}
                name="id"
              />
              <input
                className="pw-input"
                type="password"
                placeholder="비밀번호"
                onChange={saveUserAccount}
                name="password"
              />
            </div>

            <div className="login-btn-box">
              <button className="login-btn">로그인</button>
            </div>
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

// className={`login-btn ${
//   checkId && checkPw ? "activate" : "disabled"
// }`}

// <Link to="/main">
