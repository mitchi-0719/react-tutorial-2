export const Form = (props) => {
  const { handleSubmit, gameFinished } = props;
  return (
    <div class="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="guessField">Enter a guess: </label>
        <input
          type="number"
          min="1"
          max="100"
          required
          name="guessField"
          class="guessField"
          disabled={gameFinished}
        />
        <input
          type="submit"
          value="Submit guess"
          class="guessSubmit"
          disabled={gameFinished}
        />
      </form>
    </div>
  );
};
