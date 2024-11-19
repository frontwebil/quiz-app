import "./Quiz.css";
import { QuizAnswers } from "../QuizAnswers/QuizAnswers";

export function Quiz({
  questions,
  currentQuestion,
  nextQuestion,
  answered,
  handleAnswerOption,
  selectedAnswer
}) {
  const answer = questions[currentQuestion].answer;
  return (
    <>
      <div className="quiz-question">{questions[currentQuestion].question}</div>
      <div className="quiz-answers">
        <QuizAnswers
          handleAnswerOption={handleAnswerOption}
          answer={answer}
          questions={questions}
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
          answered={answered}
        />
        <button
          className="button-next "
          onClick={nextQuestion}
          disabled={answered ? "" : "disabled"}
        >
          Next Question
        </button>
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>
    </>
  );
}
