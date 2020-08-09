import React from "react";
import "./SongRow.css";
const SongRow = ({ track }) => {
  return (
    <div className="songRow">
      <img src={track.album.images[0].url} className="songRow__album"></img>
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name)}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
