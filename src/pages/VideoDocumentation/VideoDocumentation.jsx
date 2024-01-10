import React from 'react'
import VideoComponent from '../../components/VideoComponent/VideoComponent';

const VideoDocumentation = () => {

    

    const youtubeVideoUrl = 'https://www.youtube.com/watch?v=uDNaFdZXpF0';
  
    
  
  return (
    <div>
        
        <VideoComponent videoUrl={youtubeVideoUrl}  />
    </div>
  )
}

export default VideoDocumentation