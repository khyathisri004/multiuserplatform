import React from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
const Login = () => {
  return (
    <div className={style.full}>
      <div>
        <h1 className={style.hello}>Login</h1>
        <div className={style.element}>
          <input type="email" name="email" id="e1" placeholder="Email" />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="e1"
            placeholder="Password"
          />
          <br />
          <br />
          <button>Login</button>
        </div>
        <div>
          <p>
            don't have an account ? <Link to="/Signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
