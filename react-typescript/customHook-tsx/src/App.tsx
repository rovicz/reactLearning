import React from "react";
import videoSrc from "./video.mp4";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [volume, setVolume] = useLocalStorage("volume", "0");
  const video = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (!video.current) return;
    const n = Number(volume);
    if (n >= 0 && n <= 1) {
      video.current.volume = n;
    }
  }, [volume]);
  return (
    <div>
      {volume}
      <div className="flex buttons">
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.5")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
        <button onClick={() => setVolume("2")}>200 (Erro)</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
}

export default App;
