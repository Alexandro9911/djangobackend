import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setSelectedQuestionAction} from "../../../store/admin/question/actions";
import {questionModalEditAction, questionModalViewAction} from "../../../store/admin/modals/actions";
import EmptyListCard from "../emptyListCard";

export default function AnketeList(){
  
  const listAnkete = useSelector((state) => state.ankete.anketeList)
  
  const [anketesList, setAnketesList] = useState(listAnkete)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    setAnketesList(listAnkete)
  }, [listAnkete])
  
  const onEditClick = (ankete) => {
  
  }
  
  const onViewClick = (question) => {
  
  }
  
  const onTestClick = (ankete) => {
  
  }
  
  const mapQuestions = () => {
    const resultList = anketesList.map((item) => {
      return (
        <div className="questions-list__item" key={item.identifier}>
          <div className="questions-list__item__number">{item.id}</div>
          <div className="questions-list__item__question-name">
            {item.name}
          </div>
          <span className="questions-list__item__status">Статус:
            {item.active &&
            <span className="question-active">Активна</span>
            }
            {!item.active &&
            <span className="question-not-active">Не Активна</span>
            }
          </span>
          <div className="questions-list__item__button-edit" onClick={() => onEditClick(item)}>Редактировать</div>
          <div className="questions-list__item__button-view" onClick={() => onViewClick(item)}>Просмотр</div>
          <div className="questions-list__item__button-view" onClick={() => onTestClick(item)}>Тест</div>
        </div>
      )
    })
    return resultList
  }
  
  return (
    <div>
      {anketesList.length > 0 &&
      <div className="questions-list">
        {mapQuestions()}
      </div>
      }
      {anketesList.length === 0 &&
      <div className="questions-list">
        <EmptyListCard text={'Пока что нет созданных анкет...'} colored={true} />
      </div>
      }
    </div>
  )
}