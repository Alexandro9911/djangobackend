import '../../../styles/admin/statistic/statisticFragment.sass';
import moment from "moment";
import {useDispatch} from "react-redux";
import {setCurrentUserWithAnswersAction} from "../../../store/admin/statistic/actions";
import {viewAnswersViewModalAction} from "../../../store/admin/modals/actions";


export default function TableItem({item}){
  
  const dispatch = useDispatch()
  
  const onClickItem = () => {
    dispatch(setCurrentUserWithAnswersAction(item))
    dispatch(viewAnswersViewModalAction(true))
  }
  
  const getDate = () => {
    if(item.date_of_set !== null){
      return moment(item.date_of_set).format('DD MMMM YYYY, HH:mm:ss')
    } else {
      return  'Нет ответов'
    }
  }
  
  return (
    <div className="table-item__item-layout">
      <div className="table-item__item-layout__user-name">{item.user_name}</div>
      <div className="table-item__item-layout__ankete-name">Анкета: {item.ankete_name}</div>
      <div>Последние изменение: {getDate()}</div>
      <div className="table-item__item-layout__button-view" onClick={onClickItem}>Просмотр</div>
    </div>
  )
}