import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#">
            <img src="/Images/spo-logo.png" />
          </a>
        </div>
      </header>

      <section>
        <div className="main">
          <h1>Login in to spotify</h1>

          <div className="accounts">
            <button type="button" className="accountButton" id="g">
              <img src="/Images/google.png"></img>
              <span>Continue with Google</span>
            </button>
            <button type="button" className="accountButton" id="f">
              <img src="/Images/facebook.png"></img>
              <span>Continue with Facebook</span>
            </button>
            <button type="button" className="accountButton" id="a">
              <img src="/Images/apple.png"></img>
              <span>Continue with Apple</span>
            </button>
          </div>

          <div className="login">
            <form>
              <label>Email or Username</label>
              <input type="text" placeholder="Email or Username"></input>

              <label>Password</label>
              <input type="password" placeholder="Password"></input>

              <div className="switch">
                <input type="checkbox" id="switch"></input>
                <label for="switch"></label>
                <span>Remember me</span>
              </div>

              <Link to="/HomePage">
                {" "}
                <button type="button">log In</button>
              </Link>

              <a href="#">Forgot your password?</a>
            </form>
          </div>

          <div className="last">
            <span>Don't you have an account?</span>
            <a href="#">Sign up for spotify</a>
          </div>
        </div>
      </section>
    </>
  );
}
