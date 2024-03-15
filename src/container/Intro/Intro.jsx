import React, { useRef, useState } from "react";
import "./Intro.css";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((playVideo) => !playVideo);
    playVideo ? vidRef.current.pause() : vidRef.current.play();
  };

  return (
    <main className='app__video'>
      <video
        src={meal}
        type='video/mp4'
        autoPlay
        loop
        controls={false}
        muted
        ref={vidRef}
      />

      <div className=' app__video-overlay flex__center'>
        <div
          className='app__video-overlay-circle flex__center'
          onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Intro;
