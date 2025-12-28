export default function FinishedScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch
}) {
  const perecentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPossiblePoints} (
        {Math.ceil(perecentage)} %)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
