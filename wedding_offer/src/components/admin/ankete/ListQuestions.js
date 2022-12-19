import QuestionItem from "./QuestionItem";
import {useDispatch, useSelector} from "react-redux";
import {getRandomIdentifier} from "../../../utils/utils";
import {addNewQuestionToAnketeAction} from "../../../store/admin/ankete/actions";

export default function ListQuestions({viewMode = true, handler,setValues ,values = []}){
  
  const dispatch = useDispatch()
  
  const questionsList = useSelector((state) => state.ankete.currentAnkete.ankete_questions)
  const currAnketeId = useSelector((state) => state.ankete.currentAnkete.id)
  
  const onChangeQuestion = (value, newValue) => {
    handler(value,newValue)
  }
  
  const onClickAddQuestion = () => {
    console.log('here')
    let newQuestion = {
      wrapperActive: true,
      wrapperAnketeId: currAnketeId,
      wrapperIdentifier: getRandomIdentifier(),
      wrapperQuestionId: -1,
      question: {
        id: -1,
        name: 'Новый вопрос',
        identifier: getRandomIdentifier(),
        active: true,
        multiple: false,
        question_text: "Текст вопроса",
        answer_variants: [],
      }
    }
    setValues([...values,newQuestion])
    dispatch(addNewQuestionToAnketeAction(newQuestion))
  }
  
  const mapQuestions = () => {
    if(questionsList && questionsList.length > 0) {
      const list = questionsList.map((item) => {
          return (
            <QuestionItem item={item} viewMode={viewMode} handler={onChangeQuestion}/>
          )
      })
      return list
    } else {
      return []
    }
  }
  
  return (
    <div className="answers-block">
      <b className="answers-block__title">Вопросы анкеты</b>
      {!viewMode &&
      <div className="answers-block__addButton" onClick={onClickAddQuestion}>
        + Добавить вопрос
      </div>
      }
      <div className="answers-block__list-answers">
        {mapQuestions()}
      </div>
    </div>
  )
}