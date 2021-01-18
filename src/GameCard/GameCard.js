import React from "react";
import { Link } from "react-router-dom";
import "./GameCard.scss";

const GameCard = (props) => {
  const formattedName = props.formatInput(props.name).toLowerCase();
  const findGameInfo = (id) => {
    return props.wishList.find((game) => {
      return game.id == id;
    });
  };
  return (
    <Link
      to={`/${formattedName}`}
      onClick={(event) => {
        props.setCurrentGameInfo(findGameInfo(event.target.id));
      }}>
      <section id={props.id} key={props.key} className='cover-image'>
        <p id={props.id} className='game-title'>
          {props.name}
        </p>
        <img
          id={props.id}
          className='cover-image'
          alt='Cover Art'
          src={props.art}
        />
      </section>
    </Link>
  );
};

export default GameCard;
