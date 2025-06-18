import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { background } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    <div>
        <div className="sm:absolute md:fixed w-full h-full -z-10">
        <img className='h-screen object-cover' src={background}
        alt='Background' 
        />
      </div>
      <div className='pt-[30%] md:p-0'>
        <GptSearchBar />
        <GptMovieSuggestions />
        </div>
    </div>
    </>
  )
}

export default GptSearch;