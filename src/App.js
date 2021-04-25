import { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown.jsx";
import "./App.css";

const SAMPLE_MOVIES = [
  { id: 10, title: "The Shawshank Redemption" },
  { id: 20, title: "The Dark Knight" },
  { id: 30, title: "Shutter Island" },
  { id: 40, title: "Inception" },
  { id: 50, title: "Suicide Squad" },
];

const App = () => {
  const [movies, setMovies] = useState(SAMPLE_MOVIES);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="App">
      <h1>DROPDOWN</h1>
      <Dropdown
        title="ُSelect a Movie"
        options={movies}
        selected={selectedMovie}
        onOptionSelect={setSelectedMovie}
        maxWidth={400}
      />
    </div>
  );
};

export default App;
