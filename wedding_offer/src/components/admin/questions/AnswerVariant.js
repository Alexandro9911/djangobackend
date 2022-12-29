import '../../../styles/admin/questions/variantAnswers.sass'
import StyledInput from "../ui/input";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteAnswerFromQuestionAction, modifyAnswerAction} from "../../../store/admin/question/actions";

export default function AnswerVariant({item, viewMode}){
  
  const dispatch = useDispatch()
  
  const [text,setText] = useState(item.text)
  const [value,setValue] = useState(item.value)
  
  const [answerModifyed, setAnswerModifyed] = useState(false)
  
  const setThisAnswerModifyed = () => {
    if(!answerModifyed){
      setAnswerModifyed(true)
    }
  }
  
  const onDelete = () => {
    if(!viewMode) {
      dispatch(deleteAnswerFromQuestionAction(item))
    }
  }
  
  const valueChange = (e) => {
    setThisAnswerModifyed()
    setValue(e.target.value)
  }
  
  const textChange = (e) => {
    setThisAnswerModifyed()
    setText(e.target.value)
  }
  
  const saveUpdations = () => {
    dispatch(modifyAnswerAction(item.identifier, value,text))
    setAnswerModifyed(false)
  }
  
  const getSavedStyles = () => {
    if(answerModifyed){
      return "answers-block__list-answers__item not-saved"
    } else {
      return "answers-block__list-answers__item"
    }
  }
  
  return (
    <div className={getSavedStyles()} key={item.identifier}>
      <input
        className="answers-block__list-answers__item__value-input"
        disabled={viewMode}
        value={value}
        onChange={(e) => valueChange(e)}
      />
      <textarea
        className="answers-block__list-answers__item__text-input"
        disabled={viewMode}
        value={text}
        onChange={(e) => textChange(e)}
      />
      {!viewMode &&
        <div className="answers-block__list-answers__item__button-delete" onClick={onDelete}>
          <div className="answers-block__list-answers__item__button-delete__text">Удалить</div>
        </div>
      }
      {!viewMode &&
        <div className="answers-block__list-answers__item__button-save" onClick={saveUpdations}>
          <div className="answers-block__list-answers__item__button-save__text">Сохранить</div>
        </div>
      }
    </div>
  )
}
