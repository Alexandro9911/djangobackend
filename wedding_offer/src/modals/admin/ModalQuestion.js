import '../../styles/admin/modals.sass'
import {useDispatch} from "react-redux";
import {
  createQuestionModalAction,
  questionModalEditAction,
  questionModalViewAction
} from "../../store/admin/modals/actions";
import QuestionForm from "../../components/admin/questions/QuestionForm";
export default function ModalQuestion({type}){
  
  const dispatch = useDispatch()
  
  const onClose = () => {
    if(type === 'create') {
      dispatch(createQuestionModalAction(false))
    }
    if(type === 'edit'){
      dispatch(questionModalEditAction(false))
    }
    if(type === 'view'){
      dispatch(questionModalViewAction(false))
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
          {getTitleOfModal()} вопроса для анкеты
        </div>
        <div className="modal-window__header__close" onClick={onClose}>
            Закрыть
        </div>
      </div>
      <div className="modal-window__body">
        <QuestionForm type={type}/>
      </div>
    </div>
  )
}