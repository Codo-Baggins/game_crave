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
      style={{ textDecoration: "none" }}
      onClick={(event) => {
        props.setCurrentGameInfo(findGameInfo(event.target.id));
      }}>
      <section
        id={props.id}
        data-testid={props.id}
        key={props.id}
        className='game-card'>
        <h2 id={props.id} className='game-title'>
          {props.name}
        </h2>
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
