import { Link, Redirect } from "react-router-dom";
import "./Form.scss";

const Form = (props) => {
  // const { searchGame } = props.searchGame();
  // const { searchedGame } = props.searchedGame;
  // const { setSearchedGame } = props.setSearchedGame();
  const myFunc = () => {
    return props.searchedGame ? props.searchedGame : "";
  };

  const clearInputs = () => {
    props.setSearchedGame(null);
  };
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
        to={`/${myFunc()}`}
        value={props.searchedGame}
        onClick={
          (event) => {
            // event.preventDefault();
            props.searchGame(props.searchedGame);
            clearInputs();
          }
          //setSearchedGame(event.target.value)
        }>
        <section>Search For Game</section>
      </Link>
    </form>
  );
};
export default Form;
