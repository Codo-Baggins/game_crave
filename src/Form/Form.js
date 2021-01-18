import { Link, Redirect } from "react-router-dom";
import "./Form.scss";

const Form = (props) => {
  const myFunc = () => {
    return props.searchedGame ? props.searchedGame : "";
  };

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
        onClick={() => {
          props.searchGame(props.searchedGame);
        }}>
        <section>Search For Game</section>
      </Link>
    </form>
  );
};
export default Form;
