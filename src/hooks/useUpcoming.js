import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcoming } from "../utils/movieSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector(store => store.movies.upcoming);
  //fetch data from tmdb api using async await function and convert it to json
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results)); //updating the store with movie data
  };
  useEffect(() => {
    !upcoming && getUpcoming();
  }, []); //call once when component is rendered
};

export default useUpcoming;
