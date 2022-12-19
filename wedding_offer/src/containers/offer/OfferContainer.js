import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import OfferLayout from "../../layouts/offer/OfferLayout";
import {initUserStoreAction, setSelectErrorAction} from "../../store/offer/user/actions";
import {useDispatch} from "react-redux";

export default function OfferContainer(){
  
  const [token, setToken] = useState('')
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    const selectedToken = searchParams.get('token')
    console.log(selectedToken)
    if(selectedToken) {
      console.log('in set')
      setToken(searchParams.get('token'))
      getInfo()
    } else {
      dispatch(setSelectErrorAction(true))
    }
  })
  
  const getInfo = () => {
    if(token){
      console.log('need request here')
      const userInfo = {
        token: token,
        id: 66,
        name: 'Тестовый пользователь',
        textOffer: 'Дорогой'
      }
      dispatch(initUserStoreAction(userInfo))
    }
  }
  
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