import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Movie from "../pages/Movies";
import MovieDetails from "../pages/Movie";
import TVSeries from "../pages/Series";
import Login from "../pages/Login";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/browse" component={Home} />
        <Route path="/movies" component={Movie} />
        <Route path="/login" component={Login} />
        <Route path="/movie/details/" component={MovieDetails} />
        <Route path="/tv-series" component={TVSeries} />
        <Route path="/search" />
      </Switch>
    </main>
  );
};

export default Main;
