import React from "react";
import "./WishList.scss";
import GameCard from "../GameCard/GameCard";

const WishList = (props) => {
  const gameSnapshot = props.wishList.map((game) => {
    return (
      <GameCard
        id={game.id}
        key={game.id}
        name={game.name}
        art={game.backgroundImage}
      />
    );
  });
  return <section className='wish-list'>{gameSnapshot}</section>;
};

export default WishList;
