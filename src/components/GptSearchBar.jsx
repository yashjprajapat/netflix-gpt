import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //get data for specific movie from TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Chennai Express. Don't add any other words other than 5 movie names.";
    //Make API call using search text to openai chatgpt
    /*const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });*/
    //API call using Gemini for movie recommendations
    const geminiResults = await gemini.models.generateContent({
      model: "gemini-2.0-flash",
      contents: gptQuery,
    });
    if (!geminiResults.text) {
      console.log("Output error, please try again!");
    }
    const geminiMov = geminiResults.text.replace("\n", "");

    const geminiMovies = geminiMov.split(","); //create array from string

    const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie)); //return promises in array as it take time to get data from api

    const tmdbResults = await Promise.all(promiseArray); // waits until all promises are resolved
    
    dispatch(
      addGeminiMovieResult({
        movieNames: geminiMovies,
        movieResults: tmdbResults,
      })
    ); //sending diff data by refactoring the payload to use same action to push data to store
  };
  return (
    <div className="py-[10%] flex justify-center">
      <form
        className="w-1/2 max-sm:scale-75 max-lg:scale-90 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 p-4 m-4 bg-white"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 hover:cursor-pointer bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
