import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CustomSelect from "../ui/CustomSelect";
import '../../../styles/admin/ankete/ankete.sass'
import {getRandomIdentifier} from "../../../utils/utils";

export default function QuestionItem({item, viewMode, handler}){
  
  const [questionModifyed, setQuestionModifyed] = useState(false)
  
  const [aviableQuestions, setAviableQuestions] = useState([])
  
  const allQuestionsList = useSelector((state) => state.question.questions)
  const anketeId = useSelector((state) => state.ankete.currentAnkete.id)
  
  
  useEffect(() => {
    setAviableQuestions(allQuestionsList.filter((item) => item.active === true))
  }, [allQuestionsList])
  
  const onChangeQuestionValue = (value, newValue) => {
    let newWrapper = {
      wrapperId: -1,
      wrapperActive: true,
      wrapperIdentifier: getRandomIdentifier(),
      wrapperAnketeId: anketeId,
      wrapperQuestionId: newValue.id,
      question: newValue
    }
    handler(value,newWrapper)
  }
  
  
  const onActivate = () => {
    let newWrapper = {
      ...item,
      wrapperActive: true
    }
    handler(item,newWrapper)
  }
  
  const onDeactivate = () => {
    let newWrapper = {
      ...item,
      wrapperActive: false
    }
    handler(item,newWrapper)
  }
  
  
  const getSavedStyles = () => {
    if(questionModifyed){
      return "answers-block__list-answers__item not-saved"
    } else {
      return "answers-block__list-answers__item"
    }
  }
  
  return (
    <div className={getSavedStyles()} key={item.wrapperIdentifier}>
      <CustomSelect handler={onChangeQuestionValue} value={item} disabled={viewMode} options={aviableQuestions}/>
      <span className="questions-list__item__status question-status">Статус:
        {item.wrapperActive &&
          <span className="question-active">Активен</span>
        }
        {!item.wrapperActive &&
          <span className="question-not-active">Не Активен</span>
        }
      </span>
      {!viewMode &&
        <div className="answers-block__list-answers__item__button-delete" onClick={onActivate}>
          <div className="answers-block__list-answers__item__button-delete__text">Активен</div>
        </div>
      }
      {!viewMode &&
        <div className="answers-block__list-answers__item__button-delete" onClick={onDeactivate}>
          <div className="answers-block__list-answers__item__button-delete__text">Не активен</div>
        </div>
      }
    </div>
  )
}