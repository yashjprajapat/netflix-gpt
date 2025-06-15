import React from 'react'
import { IMG_CDN } from '../utils/constants';
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4 '>
        <img className='rounded-xl' src={IMG_CDN+posterPath} alt="Movie Poster"/>
    </div>
  );
}

export default MovieCard;