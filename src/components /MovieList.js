import React from "react";
import MovieCard from "./MovieCard";
import "../index.css";

const MovieList = ({ movielist }) => {
  return (
    <div className="movielistStyle">
      {movielist.map((movie) => (
        <MovieCard film={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
