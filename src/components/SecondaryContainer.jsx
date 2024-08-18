import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-64 pl-12 relative z-20 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Popular Movies"}
            movies={movies.nowPopularMovies}
          />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.nowTopRatedMovies}
          />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowUpcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
