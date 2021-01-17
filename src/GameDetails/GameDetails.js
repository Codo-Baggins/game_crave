import React from "react";
// import { Link } from "react-router-dom";
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
          {currentGameInfo.stores.map((store) => {
            return (
              <p>
                {store.whereToBuy} -{" "}
                <a href={store.storeURL}>{store.storeURL}</a>
              </p>
            );
          })}
          <p>{currentGameInfo.description}</p>
        </section>
        <button
          id='toggle-game-button'
          onClick={() => {
            props.toggleFromWishList();
          }}>
          {props.toggleButtonText()}
        </button>
      </section>
    </main>
  );
};

export default GameDetails;
