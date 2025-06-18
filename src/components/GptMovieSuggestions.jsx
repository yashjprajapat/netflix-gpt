import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gemini = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gemini;
  if (!movieNames) return null;
  return (
    <div className="p-4 m-2 bg-black/80">
      {movieNames.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
