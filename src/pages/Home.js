import React, { useState, useEffect, Fragment, useRef } from "react";
import Profile from "../components/Profile";
import { Planet, Cat, Ghost } from "react-kawaii";

export default function Home() {
  let welcomeScreen = useRef();
  let mainHomeScreen = useRef();

  const [profiles, setProfile] = useState([
    {
      name: "Ngozi E",
      avatar: <Ghost size={220} mood="blissful" color="#E0E4E8" />,
    },
    {
      name: "Simi A",
      avatar: <Planet size={220} mood="blissful" color="#FDA7DC" />,
    },
    {
      name: "John Snow",
      avatar: <Cat size={220} mood="blissful" color="#61DDBC" />,
    },
  ]);
  useEffect(() => {
    welcomeScreen.current.classList.add("active");
  });

  const profileSelectHandler = (event) => {
    event.preventDefault();
    welcomeScreen.current.classList.remove("active");
    mainHomeScreen.current.classList.add('active')
  }

  return (
    <Fragment>
      <div className="home">
        <div className="home__welcome-screen" ref={welcomeScreen}>
          <h1>Who's watching?</h1>
          <ul className="profiles">
            {profiles &&
              profiles.map((profile) => (
                <Profile name={profile.name} avatar={profile.avatar} profileSelectHandler={profileSelectHandler} />
              ))}
          </ul>
          <button>Manage Profiles</button>
        </div>
        <div className="home__main" ref={mainHomeScreen}>

        </div>
      </div>
    </Fragment>
  );
}
