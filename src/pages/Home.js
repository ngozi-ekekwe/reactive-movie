import React, { useState, useEffect, Fragment, useRef } from "react";
import Profile from "../components/Profile";
import { Planet, Cat, Ghost, IceCream } from "react-kawaii";

export default function Home() {
  let welcomeScreen = useRef();
  let mainHomeScreen = useRef();

  const [profiles, setProfile] = useState([
    {
      name: "Ghost E",
      avatar: <Ghost size={200} mood="blissful" color="#E0E4E8" />,
    },
    {
      name: "Planet A",
      avatar: <Planet size={200} mood="blissful" color="#FDA7DC" />,
    },
    {
      name: "Cat Snow",
      avatar: <Cat size={200} mood="blissful" color="#61DDBC" />,
    },
    {
      name: "IceCream Snow",
      avatar: <IceCream size={200} mood="blissful" color="#61DDBC" />,
    },
  ]);
  useEffect(() => {
    welcomeScreen.current.classList.add("active");
  });

  const profileSelectHandler = (event) => {
    event.preventDefault();
    welcomeScreen.current.classList.remove("active");
    mainHomeScreen.current.classList.add("active");
  };

  return (
    <Fragment>
      <div className="home">
        <div className="home__welcome-screen" ref={welcomeScreen}>
          <h1>Who's watching?</h1>
          <ul className="profiles">
            {profiles &&
              profiles.map((profile) => (
                <Profile
                  name={profile.name}
                  avatar={profile.avatar}
                  profileSelectHandler={profileSelectHandler}
                />
              ))}
          </ul>
          <button>Manage Profiles</button>
        </div>
        <div className="home__main" ref={mainHomeScreen}>
          <img alt="David Chapell" src=" https://occ-0-3718-1556.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZQM0Grt_JzIGX4xhIH2K4jmVvMrwAaefssB_wmVCKSACs5NPEWP4di4h_udY7K2nkqTlyKcmOD3HSJLE6LMVBEv1jtk.webp?r=191" alt=""/>
        </div>
      </div>
    </Fragment>
  );
}

// https://occ-0-3718-1556.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZQM0Grt_JzIGX4xhIH2K4jmVvMrwAaefssB_wmVCKSACs5NPEWP4di4h_udY7K2nkqTlyKcmOD3HSJLE6LMVBEv1jtk.webp?r=191


// https://occ-0-3718-1556.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZQM0Grt_JzIGX4xhIH2K4jmVvMrwAaefssB_wmVCKSACs5NPEWP4di4h_udY7K2nkqTlyKcmOD3HSJLE6LMVBEv1jtk.webp?r=191