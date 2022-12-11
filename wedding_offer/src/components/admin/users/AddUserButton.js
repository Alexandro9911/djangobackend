import '../../../styles/admin/users/usersLayout.sass'
import {useDispatch} from "react-redux";
import {clearCurrentUserAction} from "../../../store/admin/users/actions";
import {createUserModalAction} from "../../../store/admin/modals/actions";

export default function AddUserButton(){
  
  const dispatch = useDispatch()
  
  const onClickButton = () => {
    dispatch(clearCurrentUserAction())
    dispatch(createUserModalAction(true))
  }
  
  return (
    <div className="add-user-button" onClick={onClickButton}>
      <div className="add-user-button__text">Добавить пользователя</div>
    </div>
  )
}