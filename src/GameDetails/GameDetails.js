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
          {currentGameInfo.stores.map((store) => {
            return (
              <section className='stores'>
                <h3>Where To Purchase</h3>
                <h4 className='stores'>
                  {store.whereToBuy} - <h5>{store.storeURL}</h5>
                </h4>
              </section>
            );
          })}
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
