import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function Header(props) {
  const ulList = useRef(null);
  const signInButton = useRef(null);
  const headerBar = useRef(null);

  const trackScrolling = () => {
    const heroSection = document.querySelector(".hero");
    const boundingSection = heroSection && heroSection.getBoundingClientRect();

    if (
      boundingSection.top >= 0 &&
      boundingSection.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      headerBar.current.style.background = "transparent";
    } else {
      headerBar.current.style.background = "black";
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    const path = props.location.pathname.split("/");
    const pathName = path[path.length - 1];
    if (pathName.length === 0 || pathName === "login") {
      const children = ulList.current.children;
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = "none";
        children[i].style.transition = "all .5s ease-in";
      }
    }
    if (pathName === "login") {
      signInButton.current.style.display = "none";
    } else if (pathName.length != 0 && pathName != "login") {
      signInButton.current.style.display = "none";
      const children = ulList.current.children;
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = "flex";
        children[i].style.transition = "all .5s ease-in";
      }
    }
    return () => document.removeEventListener("scroll", trackScrolling);
  }, [props.location.pathname]);

  return (
    <header ref={headerBar}>
      <div>
        <Link to="/"> Notflixx</Link>
      </div>
      <nav>
        <ul ref={ulList}>
          <li className="nav-link">
            <Link to="/browse">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/tv-series">TV Shows</Link>
          </li>
          <li className="nav-link">
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
        <div className="right-nav">
          <Link to="/login">
            <div className="signin-button" ref={signInButton}>
              Sign In
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default withRouter(Header);
