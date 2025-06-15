import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addAiringToday } from "../utils/movieSlice";

const useAiringToday = () => {
  const dispatch = useDispatch();
  const airingToday = useSelector(store => store.movies.airingToday);
  //fetch data from tmdb api using async await function and convert it to json
  const getAiringToday= async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringToday(json.results)); //updating the store with movie data
  };
  useEffect(() => {
    !airingToday && getAiringToday();
  }, []); //call once when component is rendered
};

export default useAiringToday;
