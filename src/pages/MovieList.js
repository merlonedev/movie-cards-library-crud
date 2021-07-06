import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const response = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: response,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        <div>
          {movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          ))}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
