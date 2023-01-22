import AnswersVariants from "./AnswersVariants";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAnswerAction} from "../../../store/offer/test/actions";

export default function SingleAnswersVariants({answers, question, sendAnswer}){
  
  
  
  const actualQuestionsState = useSelector((state) => state.test.userAnswers)
  const currQuestion = actualQuestionsState.filter((q) => q.question_identifier  === question.question_identifier)
  
  const [currAnswers, setCurrAnswers] = useState(currQuestion[0].answer_variants)
  
  const dispatch = useDispatch()
  
  const onClickHandler = (e, selectedVariant) => {
    console.log(currAnswers)
    let newAnswArray = currAnswers.map((variant) => {
      if(selectedVariant.identifier === variant.identifier){
        return {
          ...variant,
          checked: !variant.checked
        }
      } else {
        return {
          ...variant,
          checked: false
        }
      }
    })
    
    setCurrAnswers(newAnswArray)
    dispatch(setAnswerAction(question, selectedVariant, !selectedVariant.checked))
  }
  
  
  const getClassName = (identifier) => {
    const checked = currAnswers?.filter((item) => item.identifier === identifier)[0].checked
    if(checked)
    return checked ? 'selected' : ''
  }
  
  const mapVariants = () => {
    return answers.map((el) => {
      return (
        <div key={el.identifier}>
          <div className="answer-variant" onClick={(e) => onClickHandler(e, el)}>
            <div className="answer-variant__button">
              <div className={getClassName(el.identifier)}/>
            </div>
            <div className="answer-variant__label">{el.text}</div>
          </div>
        </div>
      )
    })
  }
  
  return mapVariants()
}