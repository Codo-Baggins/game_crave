import React from "react";
import "./GameDetails.scss";

const GameDetails = (props) => {
  const { currentGameInfo } = props;
  // console.log("hello");
  console.log(currentGameInfo);
  return (
    <section>
      <div>
        <section
          className='game-details'
          style={{
            backgroundImage: `url(${currentGameInfo.backgroundImage})`,
          }}>
          <p id='title'>{currentGameInfo.name}</p>
        </section>
        <section>
          <p>{currentGameInfo.stores.whereToBuy}</p>
          <p>{currentGameInfo.description}</p>
        </section>
      </div>
    </section>
  );
};

export default GameDetails;
