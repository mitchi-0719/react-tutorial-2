export const Guess = (props) => {
  const {
    previousGuesses,
    lastResultMessage,
    lastResultColor,
    userGuess,
    randomNumber,
  } = props;

  return (
    <div class="resultParas">
      <p class="guesses">{previousGuesses.join(" ")}</p>
      <p class="lastResult" style={{ backgroundColor: lastResultColor }}>
        {lastResultMessage}
      </p>
      {userGuess !== randomNumber && (
        <p class="lowOrHi">
          {userGuess < randomNumber
            ? "Last guess was too low!"
            : "Last guess was too high!"}
        </p>
      )}
    </div>
  );
};
