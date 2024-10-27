import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";

function PlayGame() {
  // const [search] = useSearchParams();
  // console.log(search.get("text"));

  // const { text } = useParams();

  const { state } = useLocation();

  const [guessed, setGuessedLetter] = useState([]);
  const [step, setStep] = useState(0);
  function handleLetterClick(letter) {
    if (state.wordSelected.toUpperCase().includes(letter)) {
      console.log("correct");
    } else {
      console.log("wrong");
      setStep(step + 1);
    }
    setGuessedLetter([...guessed, letter]);
  }
  return (
    <>
      <h1>Play Game </h1>
      <MaskedText text={state.wordSelected} guessedLetters={guessed} />
      <div>
        <LetterButtons
          text={state.wordSelected}
          guessedLetter={guessed}
          onLetterClick={handleLetterClick}
        />
      </div>
      <div>
        <HangMan step={step} />
      </div>
      <Link to={"/start"} className="text-green-600">
        Start the game
      </Link>
    </>
  );
}

export default PlayGame;
