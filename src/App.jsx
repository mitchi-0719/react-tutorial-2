import { useState } from "react";
import { Form } from "./components/Form";
import { Guess } from "./components/Guess";
import { Top } from "./components/Top";

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function App() {
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function handleSubmit(event) {
    event.preventDefault();
    const guessField = event.target.elements.guessField;
    const newUserGuess = Number(guessField.value);
    setPreviousGuesses([].concat(previousGuesses, [newUserGuess]));
    guessField.value = "";
    guessField.focus();
  }

  function handleClickResetButton() {
    setPreviousGuesses([]);
    setRandomNumber(generateRandomNumber());
  }

  const guessCount = previousGuesses.length;
  const userGuess = guessCount === 0 ? null : previousGuesses[guessCount - 1];
  const gameClear = userGuess === randomNumber;
  const gameOver = guessCount === 10;
  const gameFinished = gameClear || gameOver;

  let lastResultMessage = "Wrong!";
  if (gameClear) {
    lastResultMessage = "Congratulations! You got it right!";
  } else if (gameOver) {
    lastResultMessage = "!!!GAME OVER!!!";
  }
  let lastResultColor = "";
  if (gameClear) {
    lastResultColor = "green";
  } else if (userGuess != null) {
    lastResultColor = "red";
  }

  return (
    <>
      <Top />

      <Form handleSubmit={handleSubmit} gameFinished={gameFinished} />

      {userGuess != null && (
        <Guess
          previousGuesses={previousGuesses}
          lastResultMessage={lastResultMessage}
          lastResultColor={lastResultColor}
          userGuess={userGuess}
          randomNumber={randomNumber}
        />
      )}

      {gameFinished && (
        <button onClick={handleClickResetButton}>Start new game</button>
      )}
    </>
  );
}
