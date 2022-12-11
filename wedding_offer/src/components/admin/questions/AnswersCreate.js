import '../../../styles/admin/variantAnswers.sass'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import AnswerVariant from "./AnswerVariant";
import {addNewAnswerToQuestionAction} from "../../../store/admin/question/actions";
import {getRandomIdentifier} from "../../../utils/utils";

export default function AnswersCreate({
  viewMode = false,
  handler,
}){
  
  const [values, setValues] = useState([])
  
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.question.currentQuestion.answers)
  
  useEffect(() => {
    if(answers) {
      setValues(answers)
    } else {
      setValues([])
    }
  }, [answers])
  
  const onClickAddAnswer = () => {
    dispatch(addNewAnswerToQuestionAction(
      {
        id: '',
        identifier: getRandomIdentifier(),
        value: 0,
        text: 'Вариант ответа'
      }
    ))
  }
  
  const mapAnswers = () => {
    if(values && values.length > 0) {
      const list = values.map((item) => {
        return (
          <AnswerVariant item={item} viewMode={viewMode}/>
        )
      })
      return list
    } else {
      return []
    }
  }
  
  const getCounter = () => {
    if(values){
      return values.length
    } else {
      return 0
    }
  }
  
  return (
    <div className="answers-block">
      <b className="answers-block__title">Варианты ответа</b>
      <div className="answers-block__sub-title">Добавлено: {getCounter()}</div>
      {!viewMode &&
        <div className="answers-block__addButton" onClick={onClickAddAnswer}>
          + Добавить вариант ответа
        </div>
      }
      <div className="answers-block__list-answers">
        {mapAnswers()}
      </div>
    </div>
  )
}