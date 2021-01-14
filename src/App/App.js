import React, { useState, useEffect } from "react";
import "./GameDetails.scss";

const App = () => {
  const [searchedGame, setSearchedGame] = useState(null);
  const [wishList, setWishList] = useState([]);

  const searchGame = (gameName) => {
    setSearchedGame(gameName);
  };

  useEffect(() => searchGame(), [searchedGame]);

  return (
    <main>
      <section>
        <h1>GAME CRAVE</h1>
        <button>Home</button>
        <form>
          <input placeholder='Type The Title Of A Game'></input>
          <button onClick={searchGame}>Search For A Game</button>
        </form>
      </section>
    </main>
  );
};

export default App;
