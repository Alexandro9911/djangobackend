import {createAnketeModalAction, createQuestionModalAction} from "../../../store/admin/modals/actions";
import {getRandomIdentifier} from "../../../utils/utils";
import {useDispatch} from "react-redux";
import {clearCurrentAnketeAction} from "../../../store/admin/ankete/actions";

export default function CreateAnketeCard(){
  
  const dispatch = useDispatch()
  
  const onButtonClick = () => {
    dispatch(createAnketeModalAction(true))
    dispatch(clearCurrentAnketeAction())
    
  }
  
  return (
    <div className="create-question-card">
      <div className="create-question-card__text">
        Можно добавить новую анкету
      </div>
      <div className="create-question-card__button" onClick={onButtonClick}>
        <div className="create-question-card__button__text">
          Cоздать анкету ->
        </div>
      </div>
    </div>
  )
}