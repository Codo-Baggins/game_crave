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
        formatInput={props.formatInput}
        setCurrentGameInfo={props.setCurrentGameInfo}
        wishList={props.wishList}
      />
    );
  });
  return (
    <>
      <h1>YOUR WISH LIST</h1>
      <section className='wish-list'>{gameSnapshot}</section>
    </>
  );
};

export default WishList;
