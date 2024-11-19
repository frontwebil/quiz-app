export function QuizAnswers({
  questions,
  currentQuestion,
  answer,
  handleAnswerOption,
  selectedAnswer,
  answered,
}) {
  return (
    <>
      {questions[currentQuestion].options.map((option, index) => (
        <button
          className={
            answered
              ? answer === index
                ? "active"
                : selectedAnswer === index
                ? "wrong"
                : ""
              : ""
          }
          key={index}
          onClick={() => {
            handleAnswerOption(index, answer);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
}
