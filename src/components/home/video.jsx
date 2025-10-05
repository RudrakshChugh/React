import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video 
        className='h-full w-full object-cover' 
        autoPlay 
        muted
        loop 
        playsInline
        src="../src/assets/vd.mp4"
      />
    </div>
  )
}

export default Video
