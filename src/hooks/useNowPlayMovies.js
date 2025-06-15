import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  //fetch data from tmdb api using async await function and convert it to json
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results)); //updating the store with movie data
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []); //call once when component is rendered
};

export default useNowPlayingMovies;
