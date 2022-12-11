import '../../../styles/admin/questions.sass'
import {useDispatch} from "react-redux";
import {createQuestionModalAction} from "../../../store/admin/modals/actions";
import {clearSelectedQuestionAction} from "../../../store/admin/question/actions";
import {getRandomIdentifier} from "../../../utils/utils";

export default function CreateQuestionsCard(){
  
  const dispatch = useDispatch()
  
  const onButtonClick = () => {
    dispatch(createQuestionModalAction(true))
    dispatch(clearSelectedQuestionAction({
      id: 0,
      identifier: getRandomIdentifier(),
      name: '',
      active: true,
      multiple: false,
      answerIdentificator: '',
      title: '',
      answers: [],
      textUnderUsed: false,
      textUnder: ''
    }))
  }
  
  return (
    <div className="create-question-card">
      <div className="create-question-card__text">
        Можно добавить новый вопрос
      </div>
      <div className="create-question-card__button" onClick={onButtonClick}>
        <div className="create-question-card__button__text">
          Cоздать вопрос ->
        </div>
      </div>
    </div>
  )
}