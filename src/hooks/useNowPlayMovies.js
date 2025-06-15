import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  //fetch data from tmdb api using async await function and convert it to json
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    console.log(data);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results)); //updating the store with movie data
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []); //call once when component is rendered
};

export default useNowPlayingMovies;
