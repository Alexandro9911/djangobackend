import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import OfferLayout from "../../layouts/offer/OfferLayout";
import {initUserStoreAction, setSelectErrorAction} from "../../store/offer/user/actions";
import {useDispatch} from "react-redux";
import useUserInfoQuery from "../../api/queries/offer/useUserInfoQuery";
import Loader from "../../components/offer/Loader";

export default function OfferContainer(){
  
  const [token, setToken] = useState('')
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [info, setInfo] = useState({})
  const dispatch = useDispatch()
  
  const {data: { data }, isLoading, isFetching } = useUserInfoQuery(searchParams.get('token'))
  
  let loading = isLoading || isFetching
  
  const [setupCompleted, setSetupCompleted] = useState(false)
  const [show,setShow] = useState(false)
  const [wasErrorDueSelection, setWasErrorDueSelection] = useState(false)
  
  useEffect(() => {
    const selectedToken = searchParams.get('token')
    if(selectedToken) {
      setToken(searchParams.get('token'))
    } else {
      setWasErrorDueSelection(true)
      dispatch(setSelectErrorAction(true))
    }
  }, [])
  
  useEffect(() => {
    if(!loading){
      setInfo(data.result)
      dispatch(initUserStoreAction(data.result))
      waitTillSetup()
      setShow(setupCompleted && !loading && !wasErrorDueSelection)
    }
  }, [loading, data, setupCompleted, wasErrorDueSelection])
  
  useEffect(() => {
    if(info && info !== 'not found') {
      setWasErrorDueSelection(false)
    } else {
      setWasErrorDueSelection(true)
    }
  }, [info])
  
  const waitTillSetup = () => {
    setTimeout(() => {
      setSetupCompleted(true)
    }, 1500)
  }
  
  return (
    <div>
      {!show &&
        <Loader/>
      }
      {show &&
        <OfferLayout/>
      }
    </div>
  )
}