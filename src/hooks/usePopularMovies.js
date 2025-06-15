import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movies.popularMovies);
  //fetch data from tmdb api using async await function and convert it to json
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results)); //updating the store with movie data
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []); //call once when component is rendered
};

export default usePopularMovies;
