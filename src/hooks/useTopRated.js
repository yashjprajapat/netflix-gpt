import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRated = useSelector(store => store.movies.topRated);
  //fetch data from tmdb api using async await function and convert it to json
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRated(json.results)); //updating the store with movie data
  };
  useEffect(() => {
    !topRated && getTopRated();
  }, []); //call once when component is rendered
};

export default useTopRated;
