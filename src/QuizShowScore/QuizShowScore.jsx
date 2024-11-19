import "./QuizShowScore.css";

export function QuizShowScore({ score, questions, goBack }) {
  return (
    <>
      <div className="You-score">
        You score {score} of {questions.length}
      </div>
      <button className="Return-Back" onClick={() => goBack()}>
        Return Back
      </button>
    </>
  );
}
