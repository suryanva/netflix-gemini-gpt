import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const gptMovieResult = useSelector((state) => state.gpt.gptMovieResult);
  if (!gptMovieResult) return null;
  return (
    <div className="w-1/2  mx-auto bg-black bg-opacity-90">
      <div className=" flex justify-center items-center mx-auto p-6 ">
        {gptMovieResult.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
