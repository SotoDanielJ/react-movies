import { useState } from "react";
import React, { Component } from "react";
import soundfile from '/Users/maceo/react-movies/public/star-wars-cantina-song.mp3'

const MusicPlayer = () => {
<audio controls src={soundfile} type="audio/mp3">
Your browser does not support the audio element.
</audio>

}

export default MusicPlayer