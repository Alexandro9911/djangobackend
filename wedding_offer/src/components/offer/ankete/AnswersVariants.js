import '../../../styles/offer/ankete/ankete.sass'
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setAnswerAction} from "../../../store/offer/test/actions";

export default function AnswersVariants({question, variant, sendAnswer}){
  
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    setSelected(variant.checked)
  }, [])
  
  useEffect(() => {
    updateInfoInStore()
  }, [selected])
  
  const onClickHandler = () => {
    setSelected((prev) => !prev)
    sendAnswer(question)
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