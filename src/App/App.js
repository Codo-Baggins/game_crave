import React, { useState, useEffect } from "react";
import "./App.scss";
import Form from "../Form/Form";
import GameDetails from "../GameDetails/GameDetails";
import WishList from "../WishList/WishList";
import { fetchGameData } from "../apiCalls";
import { filterUnnecessaryData } from "../utilities/utilities";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [searchedGame, setSearchedGame] = useState(null);
  const [currentGameInfo, setCurrentGameInfo] = useState(null);
  const [wishList, setWishList] = useState([]);

  const formatInput = (gameName) => {
    if (gameName) {
      return gameName.replace(/\s/g, "-");
    }
  };

  const searchGame = (gameName) => {
    const formattedName = formatInput(gameName);
    if (searchedGame !== null) {
      fetchGameData(formattedName)
        .then((data) => {
          setCurrentGameInfo(filterUnnecessaryData(data));
        })
        .catch(() => console.error);
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
          setCurrentGameInfo={setCurrentGameInfo}
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
      return "REMOVE FROM WISH LIST";
    } else {
      return "ADD TO WISH LIST";
    }
  };

  return (
    <BrowserRouter>
      <main>
        <section>
          <section id='header'>
            <Link
              to='/'
              style={{ textDecoration: "none" }}
              onClick={() => setCurrentGameInfo(null)}>
              <h1 id='title'>GAME CRAVE</h1>
            </Link>
            <div className='navigation'>
              <Link
                to='/'
                style={{ textDecoration: "none" }}
                onClick={() => setCurrentGameInfo(null)}>
                <button className='nav-button'>Home</button>
              </Link>
              <Link to='/wish-list'>
                <button className='nav-button'>My Wish List</button>
              </Link>
            </div>
          </section>
          <section id='body'>
            <Form
              searchGame={searchGame}
              searchedGame={searchedGame}
              setSearchedGame={setSearchedGame}
            />
          </section>
          <Switch>
            <Route
              exact
              path='/wish-list'
              render={() => (
                <WishList
                  wishList={wishList}
                  formatInput={formatInput}
                  currentGameInfo={currentGameInfo}
                  setCurrentGameInfo={setCurrentGameInfo}
                />
              )}></Route>
            <Route
              path='/:gameName'
              render={({ match }) =>
                renderGameDetails(match.params.gameName)
              }></Route>
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
