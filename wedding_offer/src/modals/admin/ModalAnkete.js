import {useDispatch} from "react-redux";
import {
  createAnketeModalAction,
  editAnketeModalAction,
  viewAnketeModalAction
} from "../../store/admin/modals/actions";
import AnketeForm from "../../components/admin/ankete/AnketeForm";

export default function ModalAnkete({type}){
  
  const dispatch = useDispatch()
  
  const onClose = () => {
    if(type === 'create') {
      dispatch(createAnketeModalAction(false))
    }
    if(type === 'edit'){
      dispatch(editAnketeModalAction(false))
    }
    if(type === 'view'){
      dispatch(viewAnketeModalAction(false))
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
          {getTitleOfModal()} анкеты
        </div>
        <div className="modal-window__header__close" onClick={onClose}>
          Закрыть
        </div>
      </div>
      <div className="modal-window__body">
        <AnketeForm type={type}/>
      </div>
    </div>
  )
}