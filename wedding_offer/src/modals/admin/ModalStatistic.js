import {useDispatch} from "react-redux";


import {setCurrentUserWithAnswersAction} from "../../store/admin/statistic/actions";
import ViewAnswers from "../../components/admin/statistic/ViewAnswers";
import {viewAnswersViewModalAction} from "../../store/admin/modals/actions";

export default function ModalAnswerView(){
  
  const dispatch = useDispatch()
  
  const onClose = () => {
    dispatch(viewAnswersViewModalAction(false))
    dispatch(setCurrentUserWithAnswersAction({}))
  }
  
  return (
    <div className="modal-window">
      <div className="modal-window__header">
        <div className="modal-window__header__title">
          Просмотр ответов пользователя
        </div>
        <div className="modal-window__header__close" onClick={onClose}>
          Закрыть
        </div>
      </div>
      <div className="modal-window__body">
        <ViewAnswers/>
      </div>
    </div>
  )
}