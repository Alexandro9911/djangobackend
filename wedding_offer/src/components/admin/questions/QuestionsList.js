import '../../../styles/admin/questions/questions.sass'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedQuestionAction} from "../../../store/admin/question/actions";
import {questionModalEditAction, questionModalViewAction} from "../../../store/admin/modals/actions";
import EmptyListCard from "../emptyListCard";

export default function QuestionsList(){
  
  const listQuest = useSelector((state) => state.question.questions)
  
  const [questionsList, setQuestionsList] = useState(listQuest)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    setQuestionsList(listQuest)
  }, [listQuest])
  
  const onEditClick = (question) => {
    dispatch(setSelectedQuestionAction(question))
    dispatch(questionModalEditAction(true))
  }
  
  const onViewClick = (question) => {
    dispatch(setSelectedQuestionAction(question))
    dispatch(questionModalViewAction(true))
  }
  
  const mapQuestions = () => {
    const resultList = questionsList.map((item) => {
      return (
        <div className="questions-list__item" key={item.identifier}>
          <div className="questions-list__item__number">{item.id}</div>
          <div className="questions-list__item__question-name">
            {item.name}
          </div>
          <span className="questions-list__item__status">Статус:
            {item.active &&
              <span className="question-active">Активен</span>
            }
            {!item.active &&
              <span className="question-not-active">Не Активен</span>
            }
          </span>
          <div className="questions-list__item__button-edit" onClick={() => onEditClick(item)}>Редактировать</div>
          <div className="questions-list__item__button-view" onClick={() => onViewClick(item)}>Просмотр</div>
        </div>
      )
    })
    return resultList
  }
  
  return (
    <div>
      {questionsList.length > 0 &&
        <div className="questions-list">
          {mapQuestions()}
        </div>
      }
      {questionsList.length === 0 &&
        <EmptyListCard colored={true} text={"Пока что вопросов тут нет..."} />
      }
    </div>
  )
}