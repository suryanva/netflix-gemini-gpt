import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const gptMovieResult = useSelector((state) => state.gpt.gptMovieResult);

  if (!gptMovieResult) {
    return null; // Return null if the gptMovieResult is not available
  }

  return (
    <div className="w-1/2 mx-auto bg-black bg-opacity-90 rounded-b-lg">
      <div className="w-full flex flex-wrap pb-4">
        {gptMovieResult
          .filter((movie) => movie && movie.id) // Filter out undefined or invalid movie objects
          .map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
