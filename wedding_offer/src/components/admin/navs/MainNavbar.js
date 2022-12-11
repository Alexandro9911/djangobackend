import SimpleButton from "../ui/simpleButton";
import {useDispatch} from "react-redux";
import {clearAuthAction} from "../../../store/admin/auth/actions";
import '../../../styles/admin/mainNavbar.sass'
import { useNavigate } from "react-router-dom";

export default function MainNavbar(){
  
  const dispatch = useDispatch()
  const navigation = useNavigate()
  
  const logOut = () => {
    window.sessionStorage.clear()
    dispatch(clearAuthAction())
    navigation('/admin')
  }
  
  return (
    <div className="main-navbar">
      <SimpleButton text={'выход'} onClickHandler={logOut}/>
    </div>
  )
}