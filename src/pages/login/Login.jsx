import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647410910018/spTELtuIz.jpeg"
            alt="netflix logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix <b>Sign up now</b>{" "}
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure your'not a bot.{" "}
            <b>Learn more</b>{" "}
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
