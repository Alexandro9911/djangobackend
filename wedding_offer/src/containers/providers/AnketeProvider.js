import useQuestionsQuery from "../../api/queries/admin/useQuestionsQuery";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fillListQuestionsAction} from "../../store/admin/question/actions";
import useAnketeQuery from "../../api/queries/admin/useAnketeQuery";
import {fillAnketeListAction} from "../../store/admin/ankete/actions";

export default function AnketeProvider({children}){
  
  const dispatch = useDispatch()
  
  const {data: { data }, isLoading, isFetching } = useAnketeQuery()
  
  let loading = isLoading || isFetching
  
  useEffect(() => {
    if(!loading){
      if(data.result){
        dispatch(fillAnketeListAction(data.result))
      }
    }
  },  [data, loading])
  
  return (
    <div>{children}</div>
  )
}