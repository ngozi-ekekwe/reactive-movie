import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "../containers/Movies";
import MovieDetails from "../containers/MovieDetails";
import TVSeries from "../containers/TVSeries";

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
