import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && ( //render if movies is present
      <div className="bg-black">
        <div className="-mt-52 relative z-10">
          {/*margin negative to overlap,z-index to get it at top*/}
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"Upcoming"} movies={movies.upcoming} />
          <MovieList title={"Shows Airing Today"} movies={movies.airingToday} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
