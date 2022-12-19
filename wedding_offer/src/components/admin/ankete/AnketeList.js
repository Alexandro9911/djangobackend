import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
  editAnketeModalAction,
  viewAnketeModalAction
} from "../../../store/admin/modals/actions";
import EmptyListCard from "../emptyListCard";
import {setCurrentAnketeAction} from "../../../store/admin/ankete/actions";
import {fillListQuestionsAction} from "../../../store/admin/question/actions";
import useQuestionsQuery from "../../../api/queries/admin/useQuestionsQuery";
import {parseList} from "../../../utils/utils";

export default function AnketeList(){
  
  const listAnkete = useSelector((state) => state.ankete.anketeList)
  
  const [anketesList, setAnketesList] = useState(listAnkete)
  
  const dispatch = useDispatch()
  
  const {data: { data }, isLoading, isFetching } = useQuestionsQuery()
  
  let loading = isLoading || isFetching
  
  useEffect(() => {
    if(!loading){
      if(data.result){
        const list = parseList(data.result)
        dispatch(fillListQuestionsAction(list))
      }
    }
  },  [data, loading])
  
  useEffect(() => {
    setAnketesList(listAnkete)
  }, [listAnkete])
  
  const onEditClick = (ankete) => {
    dispatch(setCurrentAnketeAction(ankete))
    dispatch(editAnketeModalAction(true))
  }
  
  const onViewClick = (ankete) => {
    dispatch(setCurrentAnketeAction(ankete))
    dispatch(viewAnketeModalAction(true))
  }
  
  const onTestClick = (ankete) => {
  
  }
  
  const mapAnketeList = () => {
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
        {mapAnketeList()}
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