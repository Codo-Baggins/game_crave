import React from "react";
// import { Link } from "react-router-dom";
import "./GameDetails.scss";

const GameDetails = (props) => {
  const { currentGameInfo } = props;

  return (
    <main>
      <section
        className='game-details'
        style={{
          backgroundImage: `url(${currentGameInfo.backgroundImage})`,
        }}>
        <section>
          <p id='game-title'>{currentGameInfo.name}</p>
        </section>
        <section id='main-info'>
          <section className='stores'>
            <h3>Where To Purchase</h3>
            {currentGameInfo.stores.map((store) => {
              return (
                <h5 className='stores' key={store.whereToBuy}>
                  {store.whereToBuy} - <p>{store.storeURL}</p>
                </h5>
              );
            })}
          </section>
          <div id='binding'>
            <p id='game-description'>{currentGameInfo.description}</p>
            <button
              id='toggle-game-button'
              onClick={() => {
                props.toggleFromWishList();
              }}>
              {props.toggleButtonText()}
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default GameDetails;
