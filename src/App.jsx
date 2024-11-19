import { quizes } from "./questions";
import "./App.css";
import { Quiz } from "./Quiz/Quiz";
import { useState } from "react";
import { QuizShowScore } from "./QuizShowScore/QuizShowScore";
import { SelectQuiz } from "./SelectQuiz/SelectQuiz";

function App() {
  const [questionsTitle , setquestionsTitle] = useState('Quiz App')
  const [questions, setQuestions] = useState("");
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const goBack = () => {
    setquestionsTitle('Quiz App')
    setQuestions('')
    setcurrentQuestion(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
  };

  const handleAnswerOption = (index, correct) => {
    if (answered) return;
    setAnswered(true);
    setSelectedAnswer(index);
    if (index === correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setcurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      <div className="">
        <div className="quiz-header">{questionsTitle}</div>
        {questions === "" ? (
          <SelectQuiz quizes={quizes} setQuestions={setQuestions} setquestionsTitle={setquestionsTitle}/>
        ) : (
          <div className="quiz-container">
            {showScore === false ? (
              <Quiz
                questions={questions}
                currentQuestion={currentQuestion}
                nextQuestion={nextQuestion}
                answered={answered}
                handleAnswerOption={handleAnswerOption}
                score={score}
                selectedAnswer={selectedAnswer}
              />
            ) : (
              <QuizShowScore
                score={score}
                questions={questions}
                goBack={goBack}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
