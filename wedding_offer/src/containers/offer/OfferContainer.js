import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import OfferLayout from "../../layouts/offer/OfferLayout";
import {initUserStoreAction, setSelectErrorAction} from "../../store/offer/user/actions";
import {useDispatch} from "react-redux";
import useAnketeQuery from "../../api/queries/admin/useAnketeQuery";
import useUserInfoQuery from "../../api/queries/offer/useUserInfoQuery";

export default function OfferContainer(){
  
  const [token, setToken] = useState('')
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [info, setInfo] = useState({})
  const dispatch = useDispatch()
  
  const {data: { data }, isLoading, isFetching } = useUserInfoQuery(searchParams.get('token'))
  
  let loading = isLoading || isFetching
  
  useEffect(() => {
    const selectedToken = searchParams.get('token')
    if(selectedToken) {
      setToken(searchParams.get('token'))
    } else {
      dispatch(setSelectErrorAction(true))
    }
  }, [])
  
  useEffect(() => {
    if(!loading){
      setInfo(data.result)
      dispatch(initUserStoreAction(data.result))
    }
  }, [loading, data])
  
  return (
    <div>
      {loading &&
        <div>loader</div>
      }
      {!loading &&
        <OfferLayout/>
      }
    </div>
  )
}