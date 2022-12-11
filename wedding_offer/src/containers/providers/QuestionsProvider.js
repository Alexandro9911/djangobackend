import useQuestionsQuery from "../../api/queries/admin/useQuestionsQuery";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fillListQuestionsAction} from "../../store/admin/question/actions";

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
  
  const parseList = (data) => {
    if(data.length > 0){
      return data.map((item) => {
        return {
          id: item.id,
          identifier: item.identifier,
          name: item.name,
          active: item.active,
          multiple: item.multiple,
          title: item.question_text,
          answers: JSON.parse(item.answer_variants)
        }
      })
    } else {
      return []
    }
  }
  
  return (
    <div>{children}</div>
  )
}