import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/reset.scss";
import "../../styles/common.scss";
import "../Login/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="body">
        <div className="layout">
          <h1 className="loginLogo">westagram</h1>
          <div className="loginBox">
            <div className="loginInput">
              <input
                className="idInput"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                // onChange={saveUserAccount}
                name="id"
              />
              <input
                className="pwInput"
                type="password"
                placeholder="비밀번호"
                // onChange={saveUserAccount}
                name="password"
              />
            </div>

            <div className="loginBtnBox">
              <button className="loginBtn">로그인</button>
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

// const [account, setAccount] = useState({
//   id: "",
//   password: "",
//   // id, pw 초기값 비워두기
// });

// console.log(account.id);

// const saveUserAccount = e => {
//   setAccount({
//     ...account,
//     [e.target.name]: e.target.value,
//   });
//   // id 입력시 ["id"], pw 입력시 ["password"] 출력
// };

// console.log(account);
// account state -> id, pw 입력시 {id: 'dfdf', password: 'dfdf'}

// const checkAccount = () => {
//   if (account.id.includes("@") && account.password.length >= 5) {
//     console.log("success");
//   } else {
//     console.log("fail");
//   }
// };
