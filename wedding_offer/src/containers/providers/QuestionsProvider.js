import useQuestionsQuery from "../../api/queries/admin/useQuestionsQuery";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fillListQuestionsAction} from "../../store/admin/question/actions";
import {parseList} from "../../utils/utils";

export default function QuestionsProvider({children}){
  
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
  
  
  return (
    <div>{children}</div>
  )
}