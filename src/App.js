import React, { useState } from "react";
import "antd/dist/antd.css";
import MovieList from "./components /MovieList";
import Filter from "./components /Filter";
import Title from "./components /Title";
import AddMOvie from "./components /AddMovie";
import { MovieData } from "./Data";
function App() {
  const [movie, setMovie] = useState(MovieData);
  const addMovie = (newMovie) => setMovie(...movie, newMovie);
  return (
    <div className="app">
      <Title />
      <Filter />
      <MovieList movielist={movie} />
      <AddMOvie handleAdd={addMovie} />
    </div>
  );
}
export default App;
