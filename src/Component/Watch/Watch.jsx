import React from 'react';
import './Watch.scss';
import { ReactVideo } from 'reactjs-media';
const Watch = () => {
    return (
   <div>
   <ReactVideo
                src="https://www.example.com/video.mp4"
                poster="/poster.jpg"
            />
   
   </div>
    )
}

export default Watch;
