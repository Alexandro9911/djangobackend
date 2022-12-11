import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/admin/AuthCard";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAuthSuccessAction} from "../store/admin/auth/actions";
import { useNavigate } from "react-router-dom";
import {authRequest} from "../api/requests/admin/auth/authRequest";

export default function AuthContainer(){
  
  const [login, setLogin] = useState('')
  const [passw, setPassw] = useState('')
  
  const [loginError, setLoginError] = useState(false)
  const [passwError, setPasswError] = useState(false)
  
  const [textLoginError, setTextLoginError] = useState('')
  const [textPasswError, setTextPasswError] = useState('')
  
  const [formValid, setFormValid] = useState(false)
  
  const [globalError, setGlobalError] = useState(false)
  const [textGlobalError, setTextGlobalError] = useState('')
  
  const dispatch = useDispatch()
  const authStore = useSelector((state) => state.auth)
  const navigation = useNavigate()
  
  const loginHandler = (value) => {
    setLogin(value)
    setLoginError(false)
    setTextLoginError('')
    clearGlobalError()
  }
  
  const passwHandler = (value) => {
    setPassw(value)
    setPasswError(false)
    setTextPasswError('')
    clearGlobalError()
  }
  
  const clearGlobalError = () => {
    setGlobalError(false)
    setTextGlobalError('')
  }
  
  const handleSubmit = async () => {
    if(valudateForm()){
      setFormValid(true)
      let authResult = await authRequest(login, passw)
      console.log('АВТОРИЗАЦИЯ: ', authResult)
      if(authResult.result === 'success'){
        window.sessionStorage.setItem('auth', 'success')
        dispatch(setAuthSuccessAction())
        navigation('ankete')
      } else {
        setTextGlobalError('Отказано в доступе')
        setGlobalError(true)
      }
    } else {
      setFormValid(false)
    }
  }
  
  const valudateForm = () => {
    let result = true
    
    if(login.length <= 5){
      result = false
      setLoginError(true)
      setTextLoginError('Логин не соответствует критериям')
    }
    if(passw.length <= 5){
      result = false
      setPasswError(true)
      setTextPasswError('Логин не соответствует критериям')
    }
    
    return result
  }
  
  return (
    <AuthLayout>
      <AuthCard
        handleLoginChange={loginHandler}
        handlePasswChange={passwHandler}
        login={login}
        loginError={loginError}
        loginTextError={textLoginError}
        
        passw={passw}
        passwError={passwError}
        passwTextError={textPasswError}
        
        globalError={globalError}
        textGlobalError={textGlobalError}
        
        handleSubmit={handleSubmit}
      />
    </AuthLayout>
  )
}