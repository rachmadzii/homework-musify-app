import "./App.css";
import data from "./data.js";

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  return (
    <div className="container">
      <h1>My Playlist</h1>
      <div className="cardPlaylist">
        <img src={data.album.images[0].url} alt="ImagePlaylist" />
        <h3>{data.album.name}</h3>
        <p>{data.album.artists[0].name}</p>
        <button className="btnSelect">Select</button>
      </div>
    </div>
  );
}

export default App;
