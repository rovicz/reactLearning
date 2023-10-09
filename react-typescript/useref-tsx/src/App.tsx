import React from "react";
import videoSrc from "./video.mp4";

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  function forward2s() {
    if (!video.current) return;
    video.current.currentTime += 2;
  }

  function changeRate(speed: number) {
    if (!video.current) return;
    video.current.playbackRate = speed;
  }

  function mute() {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  }

  async function PiP() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current.requestPictureInPicture();
    }
  }

  return (
    <div>
      <div className="flex">
        {playing ? (
          <button onClick={() => video.current?.pause()}>Pause</button>
        ) : (
          <button onClick={() => video.current?.play()}>Play</button>
        )}
        <button onClick={forward2s}>+2s</button>
        <button onClick={() => changeRate(1)}>1x</button>
        <button onClick={() => changeRate(2)}>2x</button>
        <button onClick={mute}>Mute</button>
        <button onClick={PiP}>PiP</button>
      </div>
      <video
        controls
        ref={video}
        src={videoSrc}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>
    </div>
  );
}

export default App;
