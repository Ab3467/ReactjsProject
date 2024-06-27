import React from 'react'
import "./VideoPlayer.css"
import video from "../../assets/video.mp4"


export default function VideoPlayer({playstate,setplaystate}) {
  return (
    <div className={`video-player ${playstate ? '' : "hide"} `}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}
