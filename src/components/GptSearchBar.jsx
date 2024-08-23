import { useRef, useState } from "react";
import model from "../utils/gemini";
import { API_OPTIONS, TMDB_SEARCH } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/redux/gptSlice";
import Shimmer from "./Shimmer";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      `${TMDB_SEARCH}query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results[0];
  };

  const handleGptSearchClick = async () => {
    const searchValue = searchText.current.value;

    // Construct the prompt to get 5 results
    const prompt = `List 5 ${searchValue} only, nothing more, nothing less.`;

    setIsLoading(true); // Set loading state to true before starting the async operation

    try {
      // Generate content using the model
      const result = await model.generateContent(prompt);

      // Get the response text
      let responseText = result.response.text();

      // Check if responseText is in JSON format
      let moviesArray;

      try {
        // Attempt to parse as JSON
        moviesArray = JSON.parse(responseText);
      } catch (error) {
        // If JSON parsing fails, handle as plain text
        moviesArray = responseText.split(",").map((movie) => movie.trim());
      }

      // Join the movie names into a single string
      let sanitizedMovies = moviesArray.join(", ");

      // Split the string into an array of movie names
      let moviesArrayFromString = sanitizedMovies
        .split(",")
        .map((movie) => movie.trim());

      console.log(moviesArrayFromString); // This will log the array of movie names

      // Fetch movie data from TMDB
      const promiseArray = moviesArrayFromString.map((movie) =>
        searchMovieTMDB(movie)
      );

      const movieData = await Promise.all(promiseArray);
      dispatch(addGptMovieResult(movieData));
    } catch (error) {
      console.error("Error processing the search result:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after the operation completes
    }
  };

  return (
    <div className="pt-[10%] flex-col justify-center">
      <form
        className="w-1/2 mx-auto bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-black"
          placeholder="Search for a movie"
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
          disabled={isLoading} // Disable button while loading
        >
          Search
        </button>
      </form>
      {isLoading && <Shimmer />}
      {!isLoading && <GptMovieSuggestions />}
    </div>
  );
};

export default GptSearchBar;
