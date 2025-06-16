import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { background } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className="absolute w-full h-full -z-10">
        <img src={background}
        alt='Background' 
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;