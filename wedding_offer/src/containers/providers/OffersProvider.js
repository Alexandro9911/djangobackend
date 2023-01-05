import {useDispatch} from "react-redux";
import useOffersQuery from "../../api/queries/admin/useOffersQuery";
import {useEffect} from "react";
import {fillOffersListAction} from "../../store/admin/offer/actions";

export default function OffersProvider({children}){
  
  const dispatch = useDispatch()
  
  const {data: { data }, isLoading, isFetching } = useOffersQuery()
  
  let loading = isLoading || isFetching
  
  useEffect(() => {
    if(!loading){
      if(data.result){
        const list = data.result
        dispatch(fillOffersListAction(list))
      }
    }
  },  [data, loading])
  
  
  return (
    <div>{children}</div>
  )
}