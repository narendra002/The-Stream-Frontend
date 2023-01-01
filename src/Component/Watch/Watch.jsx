import React from 'react';
import './Watch.scss';
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import ReactPlayer from "react-player";


 function Watch() {
  

  return (<>

		
		

    
 <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url="https://youtu.be/K1QICrgxTjA"
             
					width='100%'
          height="400px"/>
      </div>
	
	
	
	
	
	
	<div clasName="Episodeslist">
		<h1>List of Episodes</h1>
			<br></br>
			<div className="Episodeslist_content">
			
			<div className="Episodeslist_content_item_title">
			<h2>Episodes</h2>
			</div>
			</div>
		
		</div>
	
	
	</>)
	}

export default Watch;
