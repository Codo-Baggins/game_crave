import React from "react";
import { Link } from "react-router-dom";
import "./GameCard.scss";

const GameCard = (props) => {
  return (
    <Link to={`/${props.name}`}>
      <section className='cover-image'>
        <p className='game-title'>{props.name}</p>
        <img className='cover-image' alt='Cover Art' src={props.art} />
      </section>
    </Link>
  );
};

export default GameCard;
