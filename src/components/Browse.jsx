import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
