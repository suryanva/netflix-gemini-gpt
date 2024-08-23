import { useEffect } from "react";
import {
  API_OPTIONS,
  TMDB_NOW_PLAYING,
  TMDB_POPULAR,
  TMDB_UPCOMING,
  TMDB_TOP_RATED,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
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

  // Select movies data from the Redux store
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.nowPopularMovies);
  const topRatedMovies = useSelector((store) => store.movies.nowTopRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.nowUpcomingMovies);

  useEffect(() => {
    if (nowPlayingMovies == null) {
      fetchMovies(TMDB_NOW_PLAYING, addNowPlayingMovies);
    }
    if (popularMovies == null) {
      fetchMovies(TMDB_POPULAR, addPopularMovies);
    }
    if (topRatedMovies == null) {
      fetchMovies(TMDB_TOP_RATED, addTopRatedMovies);
    }
    if (upcomingMovies == null) {
      fetchMovies(TMDB_UPCOMING, addUpcomingMovies);
    }
  }, []);
};

export default useMovies;
