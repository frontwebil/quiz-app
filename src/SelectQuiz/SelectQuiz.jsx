import './SelectQuiz.css'

export function SelectQuiz({quizes , setQuestions , setquestionsTitle}) {

  const chooseQuiz = (title , questions) => {
    setquestionsTitle(title)
    setQuestions(questions)
  }

  return (
    <div className="SelectQuiz">
      {quizes.map((el , index)=>(
        <div className="quiz" key={index} onClick={()=>{chooseQuiz(el.title , quizes[index].questions)}}>
          <h3 className="quiz-title">{el.title}</h3>
          <p className="quiz-description">{el.description}</p>
        </div>
      ))}
    </div>
  )
}
