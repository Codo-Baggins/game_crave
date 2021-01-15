import React, { useState, useEffect } from "react";
import "./App.scss";
import { fetchGameData } from "../apiCalls";
const REACT_APP_KEY = process.env.REACT_APP_RAWG_API_KEY;

const App = () => {
  const [searchedGame, setSearchedGame] = useState("");
  // const [wishList, setWishList] = useState([]);
  const inputField = document.getElementById("search-form");
  // const setGameState = (gameName) => {
  //   setSearchedGame(gameName);
  // };

  const searchGame = (gameName) => {
    if (searchedGame.length >= 0) {
      fetchGameData(gameName, REACT_APP_KEY)
        .then((data) => console.log(data))
        .catch((error) => console.error);
    }
  };

  useEffect(() => {});

  return (
    <main>
      <section>
        <h1>GAME CRAVE</h1>
        <button>Home</button>
        <form>
          <input
            id='search-form'
            placeholder='Type The Title Of A Game'
            onChange={(event) => setSearchedGame(event.target.value)}
          />

          <button
            value={searchedGame}
            onClick={(event) => {
              event.preventDefault();
              searchGame(searchedGame);
              //setSearchedGame(event.target.value)
            }}>
            Search For A Game
          </button>
        </form>
      </section>
    </main>
  );
};

export default App;
