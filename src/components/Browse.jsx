import { useEffect } from "react";
import { API_OPTIONS, TMDB_NOW_PLAYING } from "../utils/constants";
import Header from "./Header";
const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    console.log(json);
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
