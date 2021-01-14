import React, { useState, useEffect } from "react";
import "./GameDetails.scss";

const App = () => {
  const [searchedGame, setSearchedGame] = useState(null);
  const [wishList, setWishList] = useState([]);

  return (
    <main>
      <section>
        <h1>GAME CRAVE</h1>
        <button>Home</button>
      </section>
    </main>
  );
};

export default App;
