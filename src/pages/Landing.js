import React from 'react';
import { withRouter } from 'react-router-dom';

function Landing({ history }) {

  const loginHandler = (event) => {
    event.preventDefault();
    history.push("/browse");
  }
  return (
    <div className="landing">
      <div className="landing-hero">
          <div className="overlay"></div>
          <div className="content">
            <h1>Movies & TV shows listing.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <div className="landing-input">
              <input type="text" placeholder="Email address"/>
              <button onClick={loginHandler}>Get Started</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default withRouter(Landing)