import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = "https:///www.omdbapi.com?apikey=KEYVALUE";

// const movie1 = {
//   "Title": "Amazing Spiderman",
//   "Year": "2012",
//   "imdbId": "tt2586634",
//   "type": "movie",
//   "Poster": "N/A"
// }

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response =await fetch(`${API_URL}$s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect (() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className="app">
      <h1>Movie Finder!</h1>
      <div className="search">
        <input 
          placeholder="Enter name of Movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <img 
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />

        {
          movies?.length > 0 ? 
          (<div className="container">
          {movies.map((movie) => 
            <MovieCard movie={movie}/>
          )}
        </div>) : (
          <div className="empty">
            <h2>No Movies Found!</h2>
          </div>
          )
        }

      </div>
    </div>
  );
}

export default App;


// COPY CSS AND SEARCH.SVG FROM SOURCE GITHUB 
