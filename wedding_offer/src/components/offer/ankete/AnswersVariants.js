import '../../../styles/offer/ankete/ankete.sass'
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setAnswerAction} from "../../../store/offer/test/actions";

export default function AnswersVariants({prevAnswers, question, variant, sendAnswer}){
  
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(prevAnswers.length > 0){
      const prevAnswerChecked = prevAnswers.filter((item) => item.identifier === variant.identifier)[0].checked
      setSelected(variant.checked || prevAnswerChecked)
    } else {
      setSelected(variant.checked)
    }
  }, [])
  
  useEffect(() => {
    updateInfoInStore()
  }, [selected])
  
  const onClickHandler = () => {
    setSelected((prev) => !prev)
    sendAnswer()
  }
  
  const updateInfoInStore = () => {
    dispatch(setAnswerAction(question, variant, selected))
  }
  
  return (
    <div className="answer-variant" onClick={onClickHandler}>
      <div className="answer-variant__button">
        <div className={selected ? 'selected' : '' }/>
      </div>
      <div className="answer-variant__label">{variant.text}</div>
    </div>
  )
}