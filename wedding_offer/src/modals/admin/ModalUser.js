import {useDispatch} from "react-redux";
import '../../styles/admin/modals.sass'
import {
  createUserModalAction, editUserModalAction, viewUserModalAction
} from "../../store/admin/modals/actions";
import UserForm from "../../components/admin/users/UserForm";

export default function ModalUser({type}){
  
  const dispatch = useDispatch()
  
  const onClose = () => {
    if(type === 'create') {
      dispatch(createUserModalAction(false))
    }
    if(type === 'edit'){
      dispatch(editUserModalAction(false))
    }
    if(type === 'view'){
      dispatch(viewUserModalAction(false))
    }
  }
  
  const getTitleOfModal = () => {
    switch (type) {
      case 'create': return 'Создание'
      case 'edit': return 'Редактирование'
      case 'view': return 'Просмотр'
    }
  }
  
  return (
    <div className="modal-window">
      <div className="modal-window__header">
        <div className="modal-window__header__title">
          {getTitleOfModal()} пользователя
        </div>
        <div className="modal-window__header__close" onClick={onClose}>
          Закрыть
        </div>
      </div>
      <div className="modal-window__body">
         <UserForm type={type}/>
      </div>
    </div>
  )
}