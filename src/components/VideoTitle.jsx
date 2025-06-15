import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[15%] px-18 text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-lg rounded-lg hover:scale-105 hover:opacity-80 transition delay-150 duration-200'> ▶ Play</button>
            <button className='bg-gray-500/50 mx-2 text-white p-4 px-12 text-lg rounded-lg '> ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;