import StyledInput from "../ui/input";
import Toggle from "../ui/toggle";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getRandomIdentifier} from "../../../utils/utils";
import ListQuestions from "./ListQuestions";

export default function AnketeForm({type}){
  
  const dispatch = useDispatch()
  
  const [viewMode, setViewMode] = useState(type === 'view')
  
  const currentAnkete = useSelector((state) => state.ankete.currentAnkete)
  
  const ankete_identifier = useSelector((state) => state.ankete.currentAnkete.identifier)
  const ankete_id = useSelector((state) => state.ankete.currentAnkete.id)
  const ankete_name = useSelector((state) => state.ankete.currentAnkete.name)
  const current_ankete_active = useSelector((state) => state.ankete.currentAnkete.active)
  const current_list_questions = useSelector((state) => state.ankete.currentAnkete.list_questions)
  
  const [anketeIdentifier, setAnketeIdentifier] = useState(ankete_identifier)
  const [anketeId, setAnketeId] = useState(ankete_id)
  const [anketeName, setAnketeName] = useState(ankete_name)
  const [anketeActive, setAnketeActive] = useState(current_ankete_active)
  const [anketeQuestions, setAnketeQuestions] = useState(current_list_questions)

  
  useEffect(() => {
    setAnketeIdentifier(ankete_identifier)
    setAnketeId(ankete_id)
    setAnketeName(ankete_name)
    setAnketeQuestions(current_list_questions)
    setAnketeActive(current_ankete_active)
  }, [currentAnkete, ankete_identifier, ankete_id, ankete_name, current_ankete_active, current_list_questions])
  
  useEffect(() => {
    if(type === 'create'){
      setAnketeIdentifier(getRandomIdentifier())
    }
  }, [])
  
  const nameChangeHandler = (name) => {
    setAnketeName(name)
  }
  
  const changeActiveHandler = (value) => {
    setAnketeActive(value)
  }
  
  const changeAnketeQuestions = (list) => {
    setAnketeQuestions(list)
  }
  
  
  //  id: 0,
  //  identifier: '',
  //  active: false,
  //  name: '',
  //  list_questions: [],
  
  const saveAll = () => {
    console.log('save all')
  }
  
  return (
    <div className="question-form">
      <div className="question-form__main-info">
        {type !== 'create' &&
        <div className="question-form__main-info__item">
          <b className="question-form__main-info__item__label">ID: </b>
          <div className="question-form__main-info__item__value">{anketeId}</div>
        </div>
        }
        <div className="question-form__main-info__item">
          <StyledInput
            label={'Название'}
            value={anketeName}
            type={'text'}
            placeholder={'Введите название анкеты'}
            handler={nameChangeHandler}
            disabled={viewMode}
            maxWidthRequired={true}
          />
        </div>
        <div className="question-form__main-info__item">
          <Toggle
            value={anketeActive}
            handler={changeActiveHandler}
            label={'Анкета активна'}
            onlyView={viewMode}
          />
        </div>
        <div className="question-form__main-info__item">
          <StyledInput
            label={'Идентификатор'}
            value={anketeIdentifier}
            type={'text'}
            placeholder={'идентификатор'}
            disabled={true}
            maxWidthRequired={true}
          />
        </div>
        <div className="question-form__main-info__item">
          <ListQuestions viewMode={viewMode} handler={setAnketeQuestions} values={anketeQuestions}/>
        </div>
        { !viewMode &&
        <div className="question-form__main-info__item">
          <div
            className="question-form__main-info__item__button-save-all"
            onClick={saveAll}
          >
            Сохранить все изменения
          </div>
        </div>
        }
      </div>
    </div>
  )
}