import React from 'react';

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-hero">
          <div className="overlay"></div>
          <div className="content">
            <h1>Movies & TV shows listing.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <div className="landing-input">
              <input type="text" placeholder="Email address"/>
              <button>Get Started</button>
            </div>
          </div>
        </div>
    </div>
  )
}