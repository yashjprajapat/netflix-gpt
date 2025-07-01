import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='max-xl:flex max-xl:flex-row w-screen max-sm:mt-3.5 aspect-video absolute pt-[15%] px-18 max-md:px-10 text-white bg-gradient-to-r from-black'>
        <h1 className='max-md:text-2xl max-lg:text-3xl  max-sm:text-lg text-5xl font-bold'>{title}</h1>
        <p className='max-lg:invisible py-6 text-lg max-md:text-sm w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-lg rounded-lg max-md:scale-75 max-sm:scale-50 hover:scale-105 hover:opacity-80 transition delay-150 duration-200'> ▶ Play</button>
            <button className='bg-gray-500/50 mx-2 max-xl:mx-0 text-white p-4 px-12 text-lg max-md:scale-75 max-sm:invisible max-sm:scale-50 rounded-lg '> ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;