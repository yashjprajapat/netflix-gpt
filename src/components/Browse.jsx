import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import useAiringToday from "../hooks/useAiringToday";

const Browse = () => {
  useNowPlayingMovies();  
  usePopularMovies();
  useTopRated();
  useUpcoming();
  useAiringToday();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
