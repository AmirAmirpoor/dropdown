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
  // EXAMPLE FOR TYPE: SINGLE
  const [selectedMovie, setSelectedMovie] = useState(null);

  // EXAMPLE FOR TYPE: MULTIPLE
  const [selectedMovies, setSelectedMovies] = useState([]);

  const updateSelectedMovies = (movie) => {
    const exists = selectedMovies.some((m) => m.id === movie.id);
    if (exists) {
      const selected = selectedMovies.filter((m) => m.id !== movie.id);
      setSelectedMovies(selected);
    } else {
      const selected = [...selectedMovies, movie];
      setSelectedMovies(selected);
    }
  };

  return (
    <div className="App">
      <h1>DROPDOWN</h1>

      <br />
      <br />

      <Dropdown
        title="ُSelect a Movie"
        options={SAMPLE_MOVIES}
        selected={selectedMovie}
        onOptionSelect={setSelectedMovie}
        maxWidth={400}
        type="SINGLE"
      />

      <br />
      <br />

      <Dropdown
        title="ُSelect movies"
        options={SAMPLE_MOVIES}
        selected={selectedMovies}
        onOptionSelect={updateSelectedMovies}
        maxWidth={400}
        type="MULTIPLE"
      />
    </div>
  );
};

export default App;
