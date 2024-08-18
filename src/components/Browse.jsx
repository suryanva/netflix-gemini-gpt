import { useEffect } from "react";
import { API_OPTIONS, TMDB_NOW_PLAYING } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
