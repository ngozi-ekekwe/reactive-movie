import { withRouter } from 'react-router-dom';

function Login({ history }) {

  const loginHandler = (event) => {
    event.preventDefault();
    history.push("/browse");
  }

  return (
    <section>
      <div className="login-landing">
        <div className="overlay"></div>
        <div className="login-cover"></div>
        <div className="login">
          <div className="login-box">
            <h1>Sign In</h1>

            <form>
              <input
                type="text"
                className="text-input"
                placeHolder="Email or phone number"
              />
              <input
                type="text"
                className="text-input"
                placeHolder="Password"
              />
              <button onClick={loginHandler}>Sign In</button>
              <div className="form-footer">
                <div className="remember-checkbox">
                  <label htmlFor="form-checkbox">
                    <input type="checkbox" id="form-checkbox" />
                    <span>Remember me</span>
                  </label>
                </div>
                <p>Need help?</p>
              </div>
            </form>

            <div>
              <h4>New to Netflix? <span>Sign up now.</span></h4>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default withRouter(Login)
