import React from "react";
import "./GameDetails.scss";

const GameDetails = (props) => {
  // console.log(props);
  const { currentGameInfo } = props;
  // const { toggleFromWishList } = props.toggleFromWishList;
  // console.log("hello");
  return (
    <main>
      <section
        className='game-details'
        style={{
          backgroundImage: `url(${currentGameInfo.backgroundImage})`,
        }}>
        <section>
          <p id='title'>{currentGameInfo.name}</p>
        </section>
        <section>
          <p>{currentGameInfo.stores.whereToBuy}</p>
          <p>{currentGameInfo.description}</p>
        </section>
      </section>
      <button
        id='toggle-game-button'
        onClick={() => {
          props.toggleFromWishList();
        }}>
        {props.toggleButtonText()}
      </button>
    </main>
  );
};

export default GameDetails;
