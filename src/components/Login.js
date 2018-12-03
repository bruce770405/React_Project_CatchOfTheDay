import React from "react";

const Login = props => (
  <div className="catch-of-the-day">
    <nav className="login">
      <h2>Inventory Login</h2>
      <p />
      <button
        className="facebook"
        onClick={() => {
          props.authAction("Facebook");
        }}
      >
        Login with facebook
      </button>
      <button
        className="google"
        onClick={() => {
          props.authAction("Google");
        }}
      >
        Login with google
      </button>
      <button
        className="github"
        onClick={() => {
          props.authAction("Github");
        }}
      >
        Login with github
      </button>
    </nav>
  </div>
);

export default Login;
