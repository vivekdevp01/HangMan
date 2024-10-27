import { Link } from "react-router-dom";
import TextInputFormCOntainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
  return (
    <>
      <h1>Start Game</h1>
      <TextInputFormCOntainer />
      <Link to="/play" className="text-blue-300">
        play the game
      </Link>
    </>
  );
}

export default StartGame;
