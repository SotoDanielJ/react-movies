import { useState } from "react";

const MusicPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    function togglePlayPause() {
        const audio = document.getElementById("audio");
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }
    return (
      <div className="bg-gray-100 p-4 rounded">
        <audio id="audio" src="public/star-wars-cantina-song.mp3" />
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    );
}

export default MusicPlayer