import {useEffect, useState} from "react";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import AuthContainer from "./AuthContainer";
import {useDispatch, useSelector} from "react-redux";
import {setAuthSuccessAction} from "../store/admin/auth/actions";

export default function AdminContainer(){
  const [autorised, setAutorized] = useState(false)
  const dispatch = useDispatch()
  const authFromStore = useSelector((state) => state.auth.autorized)
  
  useEffect(() => {
    const localData = window.sessionStorage.getItem('auth')
    if(localData === null || localData === undefined || localData === ''){
      setAutorized(false)
    } else {
      setAutorized(true)
      dispatch(setAuthSuccessAction())
    }
  }, [])
  
  useEffect(() => {
    if(authFromStore){
      setAutorized(true)
      window.sessionStorage.setItem('auth', 'success')
      
    } else {
      setAutorized(false)
    }
  }, [authFromStore])
  
  return (
    <div>
      {autorised &&
        <AdminLayout/>
      }
      {!autorised &&
        <AuthContainer/>
      }
    </div>
  )
}