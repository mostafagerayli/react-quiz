export default function Progress({
  index,
  newQuestion,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={newQuestion} value={index + Number(answer !== null)} />
      <p>
        Question {index + 1} / {newQuestion}
      </p>
      <p>
        {points} / {maxPossiblePoints}
      </p>
    </header>
  );
}
