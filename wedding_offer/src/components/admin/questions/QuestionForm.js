import {useDispatch, useSelector} from "react-redux";
import '../../../styles/admin/modals.sass'
import {useEffect, useState} from "react";
import StyledInput from "../ui/input";
import Toggle from "../ui/toggle";
import AnswersCreate from "./AnswersCreate";
import {
  changeActiveOfQuestionAction,
  changeMultipleOfQuestionAction,
  changeNameOfQuestionAction, changeTitleOfQuestionAction, saveAllQuestionAction, updateQuestionInListAction
} from "../../../store/admin/question/actions";
import {createQuestionModalAction, questionModalEditAction} from "../../../store/admin/modals/actions";
import {sendNewQuestion} from "../../../api/requests/admin/questions/sendNewQuestion";
import {sendUpdationsQuestions} from "../../../api/requests/admin/questions/sendUpdationsQuestions";
export default function QuestionForm({type}){
  
  const item = useSelector((state) => state.question.currentQuestion)
  
  const question_name = useSelector((state) => state.question.currentQuestion.name)
  const question_active = useSelector((state) => state.question.currentQuestion.active)
  const question_multiple = useSelector((state) => state.question.currentQuestion.multiple)
  const question_title = useSelector((state) => state.question.currentQuestion.title)
  
  const dispatch = useDispatch()
  
  const [questionName, setQuestionName] = useState(question_name)
  const [activeToggle, setActiveToggle] = useState(question_active)
  const [isMultipleToggle, setIsMultipleToggle] = useState(question_multiple)
  const [questionText, setQuestionText] = useState(question_title)
  const [answersVariants, setAnswersVariants] = useState(item.answersVariants)
  
  useEffect(() => {
    setQuestionName(question_name)
    setActiveToggle(question_active)
    setIsMultipleToggle(question_multiple)
    setQuestionText(question_title)
  }, [question_active, question_name, question_multiple,question_title])
  
  const nameChangeHandler = (value) => {
    setQuestionName(value)
    dispatch(changeNameOfQuestionAction(value))
  }
  
  const activeChangeHandler = (value) => {
    setActiveToggle(value)
    dispatch(changeActiveOfQuestionAction(value))
  }
  
  const multipleChangeHandler = (value) => {
    setIsMultipleToggle(value)
    dispatch(changeMultipleOfQuestionAction(value))
  }
  
  const questionTextChangeHandler = (value) => {
    setQuestionText(value)
    dispatch(changeTitleOfQuestionAction(value))
  }
  
  const saveAllQuestion = () => {
    if(type === 'create'){
      dispatch(saveAllQuestionAction())
      dispatch(createQuestionModalAction(false))
      sendNewQuestion(item)
    }
    if(type === 'edit'){
      dispatch(updateQuestionInListAction(item.identifier))
      dispatch(questionModalEditAction(false))
      sendUpdationsQuestions(item)
    }
    
  }
  
  const [viewMode, setViewMode] = useState(type === 'view')
  
  return (
    <div className="question-form">
      <div className="question-form__main-info">
          {type !== 'create' &&
            <div className="question-form__main-info__item">
              <b className="question-form__main-info__item__label">ID: </b>
              <div className="question-form__main-info__item__value">{item.id}</div>
            </div>
          }
        <div className="question-form__main-info__item">
            <StyledInput
              label={'Название'}
              value={questionName}
              type={'text'}
              placeholder={'Введите название вопроса'}
              handler={nameChangeHandler}
              disabled={viewMode}
              maxWidthRequired={true}
            />
        </div>
        <div className="question-form__main-info__item">
          <Toggle
            value={activeToggle}
            handler={activeChangeHandler}
            label={'Вопрос активен'}
            onlyView={viewMode}
          />
        </div>
        <div className="question-form__main-info__item">
          <Toggle
            value={isMultipleToggle}
            handler={multipleChangeHandler}
            label={'Множественный ответ'}
            onlyView={viewMode}
          />
        </div>
        <div className="question-form__main-info__item">
          <StyledInput
            label={'Текст вопроса'}
            value={questionText}
            type={'text'}
            placeholder={'Вопрос'}
            handler={questionTextChangeHandler}
            disabled={viewMode}
            maxWidthRequired={true}
          />
        </div>
        <div className="question-form__main-info__item">
          <AnswersCreate values={answersVariants} handler={setAnswersVariants} viewMode={viewMode}/>
        </div>
        { !viewMode &&
          <div className="question-form__main-info__item">
            <div
              className="question-form__main-info__item__button-save-all"
              onClick={saveAllQuestion}
            >
              Сохранить все изменения
            </div>
          </div>
        }
      </div>
    </div>
  )
}