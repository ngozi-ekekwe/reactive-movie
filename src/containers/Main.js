import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movies";
import MovieDetails from "../pages/Movie";
import TVSeries from "../pages/Series";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movie} />
        <Route path="/movie/details/" component={MovieDetails} />
        <Route path="/tv-series" component={TVSeries} />
        <Route path="/search" />
      </Switch>
    </main>
  );
};

export default Main;
