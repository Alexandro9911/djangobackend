import '../../styles/admin/statistic/statisticFragment.sass'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import useStatisticQuery from "../../api/queries/admin/useStatisticQuery";
import {setAnswersStatisticActions} from "../../store/admin/statistic/actions";
import TableAnswers from "../../components/admin/statistic/TableAnswers";

export default function StatisticFragment(){
  
  const {data: { data }, isLoading, isFetching } = useStatisticQuery()
  const dispatch = useDispatch()
  const loading = isLoading || isFetching
  
  useEffect(() => {
    if(!loading){
      dispatch(setAnswersStatisticActions(data.result))
    }
  },  [data, loading])
  
  return (
    <div className="statistic-fragment">
      <p>Статистика</p>
      <TableAnswers/>
    </div>
  )
}