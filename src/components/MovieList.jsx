import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Header from "./Header";


const API_KEY = '1b11e86fce3eb8f1a1e20560088e9801';
const MovieCard = ({ movie }) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
      <div className="card" style={{ height: "100%", width: "150px" }}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.
          poster_path
          }`} alt={movie.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

function MovieList() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("");


  const searchMovies = async (searchQuery) => {
    if (!searchQuery) return fetchMovies(); // If search query is empty, show trending movies
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
      setMovies(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
      console.log('Error searching movies:', error);
    }
  };
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://api.themoviedb.org/3/movie/now_playing?api_key=1b11e86fce3eb8f1a1e20560088e9801'
  //       );
  // https://api.themoviedb.org/3/movie/550?api_key=1b11e86fce3eb8f1a1e20560088e9801
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       console.log(data.results);
  //       setMovies(data.results);

  //     }
  //     catch (error) {
  //       console.log('Error fetching data:', error)
  //     }
  //   };
  //   fetchMovies();
  // }, []);


  const fetchMovies = async () => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=1b11e86fce3eb8f1a1e20560088e9801');
      console.log(res.data.results);
      setMovies(res.data.results);
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  };


  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='container-fluid'>
      <Header onSearch={searchMovies} />
      <div className='row'>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h4 className="text-center">No movies found.</h4>
        )}
      </div>
    </div>
  )
}

export default MovieList

