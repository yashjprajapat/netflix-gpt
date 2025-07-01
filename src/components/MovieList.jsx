import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 max-md:scale-90">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden">
        {" "}
        {/*no-scrollbar works with some config added to .css file*/}
        <div className="flex">
          {movies?.map(
            (
              movie // render only if movies is present
            ) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
