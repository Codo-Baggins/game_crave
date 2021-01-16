import React, { useState, useEffect } from "react";
import "./App.scss";
// import Form from '../Form/Form'
import GameDetails from "../GameDetails/GameDetails";
import { fetchGameData } from "../apiCalls";
import { filterUnnecessaryData } from "../utilities/utilities";
const REACT_APP_KEY = process.env.REACT_APP_RAWG_API_KEY;

const App = () => {
  const [searchedGame, setSearchedGame] = useState(null);
  const [currentGameInfo, setCurrentGameInfo] = useState(null);
  const [wishList, setWishList] = useState([]);

  const searchGame = (gameName) => {
    if (searchedGame.length >= 0) {
      fetchGameData(gameName, REACT_APP_KEY)
        .then((data) => setCurrentGameInfo(filterUnnecessaryData(data)))
        .catch((error) => console.error);
    }
  };

  const renderGameDetails = () => {
    return (
      currentGameInfo && (
        <GameDetails
          currentGameInfo={currentGameInfo}
          toggleFromWishList={toggleFromWishList}
          toggleButtonText={toggleButtonText}
        />
      )
    );
  };

  const toggleFromWishList = () => {
    if (
      wishList.find((gameToRemove) => {
        return gameToRemove.id === currentGameInfo.id;
      })
    ) {
      setWishList(wishList.filter((game) => game.id !== currentGameInfo.id));
    } else {
      setWishList([...wishList, currentGameInfo]);
    }
  };

  const toggleButtonText = () => {
    if (
      wishList.find((gameToRemove) => {
        return gameToRemove.id === currentGameInfo.id;
      })
    ) {
      return "REMOVE FROM WISHLIST";
    } else {
      return "Add To WISHLIST";
    }
  };

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
      {renderGameDetails()}
    </main>
  );
};

export default App;
