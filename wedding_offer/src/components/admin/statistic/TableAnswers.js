import '../../../styles/admin/statistic/statisticFragment.sass'
import {useSelector} from "react-redux";
import EmptyListCard from "../emptyListCard";
import TableItem from "./TableItem";

export default function TableAnswers(){
  
  const listItems = useSelector((state) => state.statistic.answersStatistic)
  
  const mapTableItems = () => {
    if(listItems.length > 0){
      return listItems.map((item,index) => {
        return (
          <div className="table-item" key={item.user_name + '$' + index}>
            <TableItem item={item}/>
          </div>
        )
      })
    } else {
      return <EmptyListCard/>
    }
  }
  
  return (
    <div className="statistic-table">
      <div className="statistic-table__table">
        <div className="statistic-table__table__header">
          <div className="statistic-table__table__header__table-name">
            Таблица ответов пользователей на вопросы в анкетах
          </div>
        </div>
        <div className="statistic-table__table__list">
          {mapTableItems()}
        </div>
      </div>
    </div>
  )
}