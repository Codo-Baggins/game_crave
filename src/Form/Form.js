import { Link } from "react-router-dom";
import "./Form.scss";

const Form = (props) => {
  const checkForSearchedGame = () => {
    return props.searchedGame ? props.searchedGame : "";
  };

  return (
    <form id='search-form'>
      <input
        id='search-field'
        placeholder='Type The Title Of A Game'
        onChange={(event) => props.setSearchedGame(event.target.value)}
      />
      <Link
        to={`/${checkForSearchedGame()}`}
        value={props.searchedGame}
        style={{ textDecoration: "none" }}
        onClick={() => {
          props.searchGame(props.searchedGame);
        }}>
        <section id='search-button'>Search For Game</section>
      </Link>
    </form>
  );
};
export default Form;
