import React, {Fragment} from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Main from "./Main";

export default function App() {
  return (
      <Fragment>
        <Header />
        <Main />
        {/* <Footer /> */}
      </Fragment>
  )
}
