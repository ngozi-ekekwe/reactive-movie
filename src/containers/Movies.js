import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'
import {searchMovieDatabase, discoverMovies, getMovie } from '../api/Api';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : []
        }
    }

    componentDidMount() {
        discoverMovies().then((response) => {
            this.setState({
                movies: response.results
            })
        })
    }

    render() {
        return (
            <div>
                <div className="movies-display"> 
               {
                   this.state.movies.map((result, key) => {
                       const image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.poster_path}`
                       const url = `/movie/details/${result.id}`
                       return (
                           <div key={key} className="movie-card">
                               <Link to={url}><div className="movie-poster" style={{backgroundImage: `url(${image})`}}></div></Link>
                           </div>
                       )
                   })
               }
                </div>
            </div>
        )
    }
}