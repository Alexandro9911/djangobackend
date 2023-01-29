import AnswersVariants from "./AnswersVariants";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAnswerAction} from "../../../store/offer/test/actions";

export default function SingleAnswersVariants({ prevAnswers, answers, question, sendAnswer}){
  
  const actualQuestionsState = useSelector((state) => state.test.userAnswers)
  const currQuestion = actualQuestionsState.filter((q) => q.question_identifier  === question.question_identifier)
  
  const [currAnswers, setCurrAnswers] = useState(currQuestion[0].answer_variants)
  const [ignorePrev, setIgnorePrev] = useState(false)
  const dispatch = useDispatch()
  
  
  const onClickHandler = (e, selectedVariant) => {
    setIgnorePrev(true)
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
    sendAnswer()
  }
  
  
  const getClassName = (identifier) => {
    let prevCheck = false
    if(prevAnswers.length > 0) {
      prevCheck =  prevAnswers.filter((item) => item.identifier === identifier)[0]?.checked
    }
    const checked = currAnswers?.filter((item) => item.identifier === identifier)[0].checked || (!ignorePrev && prevCheck)
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