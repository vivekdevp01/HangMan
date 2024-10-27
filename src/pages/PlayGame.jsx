import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {
  // const [search] = useSearchParams();
  // console.log(search.get("text"));

  // const { text } = useParams();

  const { state } = useLocation();

  return (
    <>
      <h1>Play Game {state.wordSelected}</h1>
      <MaskedText text={state.wordSelected} guessedLetters={[]} />
      <Link to={"/start"} className="text-green-600">
        Start the game
      </Link>
    </>
  );
}

export default PlayGame;
