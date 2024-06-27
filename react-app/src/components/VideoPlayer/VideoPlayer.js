import React,{useRef} from 'react'
import "./VideoPlayer.css"
import video from "../../assets/video.mp4"


export default function VideoPlayer({playstate,setplaystate}) {

    const player = useRef(null)
    const closePlayer=(e)=>{
        if(e.target === player.current){
           setplaystate(false)
        }
    }

  return (
    <div className={`video-player ${playstate ? '' : "hide"} `} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}
