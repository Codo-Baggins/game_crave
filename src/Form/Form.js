import { Link } from "react-router-dom";
import "./Form.scss";

const Form = (props) => {
  // const { searchGame } = props.searchGame();
  // const { searchedGame } = props.searchedGame;
  // const { setSearchedGame } = props.setSearchedGame();
  console.log(props.searchedGame);
  return (
    <form>
      <input
        id='search-form'
        placeholder='Type The Title Of A Game'
        onChange={(event) => props.setSearchedGame(event.target.value)}
      />
      <Link
        className='search-button'
        to={`/${props.searchedGame}`}
        value={props.searchedGame}
        onClick={
          (event) => {
            event.preventDefault();
            props.searchGame(props.searchedGame);
          }
          //setSearchedGame(event.target.value)
        }>
        Search For A Game
      </Link>
    </form>
  );
};
export default Form;
