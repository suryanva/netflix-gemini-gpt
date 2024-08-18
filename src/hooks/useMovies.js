import { useEffect } from "react";
import {
  API_OPTIONS,
  TMDB_NOW_PLAYING,
  TMDB_POPULAR,
  TMDB_UPCOMING,
  TMDB_TOP_RATED,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/redux/moviesSlice";

const useMovies = () => {
  const dispatch = useDispatch();

  const fetchMovies = async (url, action) => {
    try {
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      dispatch(action(json.results));
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(TMDB_NOW_PLAYING, addNowPlayingMovies);
    fetchMovies(TMDB_POPULAR, addPopularMovies);
    fetchMovies(TMDB_TOP_RATED, addTopRatedMovies);
    fetchMovies(TMDB_UPCOMING, addUpcomingMovies);
  }, []);

  // Optionally return something if needed
  // return { loading, error };
};

export default useMovies;
