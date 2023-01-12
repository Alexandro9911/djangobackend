import {useEffect, useState} from "react";
import AnswersVariants from "./AnswersVariants";

export default function QuestionLayout({item, setAnswerHandler}){
  
  const [answers, setAnswers] = useState([])
  
  useEffect(() => {
    if(item) {
      setAnswers( typeof item.answer_variants === "object" ? item.answer_variants : JSON.parse(item.answer_variants))
    }
  }, [])
  
  
  const onClickAnswer = () => {
  
  }
  
  const mapAnswers = () => {
    if(answers){
      return answers.map((el) => {
        return (
          <div key={el.identifier}>
            <AnswersVariants variant={el} onClickItem={onClickAnswer}/>
          </div>
        )
      })
    }
  }
  
  return (
    <div className="question">
      <div className="question__question-name">{item.questions_text}</div>
      <div className="question__question-answers">
        {mapAnswers()}
      </div>
    </div>
  )
}