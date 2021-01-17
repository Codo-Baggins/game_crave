import React, { useState, useEffect } from "react";
import "./App.scss";
import Form from "../Form/Form";
import GameDetails from "../GameDetails/GameDetails";
import { fetchGameData } from "../apiCalls";
import { filterUnnecessaryData } from "../utilities/utilities";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [searchedGame, setSearchedGame] = useState(null);
  const [currentGameInfo, setCurrentGameInfo] = useState(null);
  const [wishList, setWishList] = useState([]);

  const formatInput = (gameName) => {
    return gameName.replaceAll(" ", "-");
  };

  const searchGame = (gameName) => {
    const formattedName = formatInput(gameName);
    if (searchedGame.length >= 0) {
      fetchGameData(formattedName)
        .then((data) => setCurrentGameInfo(filterUnnecessaryData(data)))
        .catch((error) => console.error);
    }
  };

  const renderGameDetails = (gameName) => {
    return (
      currentGameInfo && (
        <GameDetails
          id={gameName}
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
    <BrowserRouter>
      <main>
        <section>
          <Switch>
            {/* <form>
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
          </form> */}
            <Route
              exact
              path='/games/:id'
              render={({ match }) =>
                renderGameDetails(match.params.id)
              }></Route>
            <Route exact path='/games'>
              <h1>GAME CRAVE</h1>
              <button>Home</button>
              <Form
                searchGame={searchGame}
                searchedGame={searchedGame}
                setSearchedGame={setSearchedGame}
              />
            </Route>
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
