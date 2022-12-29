import StyledInput from "../ui/input";
import Toggle from "../ui/toggle";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getRandomIdentifier} from "../../../utils/utils";
import ListQuestions from "./ListQuestions";
import {
  addAnketeToListAction,
  applyAnketeToStoreAction, clearCurrentAnketeAction,
  saveQuestionsChangeAction,
  updateAnketeInListAction
} from "../../../store/admin/ankete/actions";
import {createAnketeModalAction, editAnketeModalAction} from "../../../store/admin/modals/actions";
import {updateAnkete} from "../../../api/requests/admin/ankete/updateAnkete";
import {createAnkete} from "../../../api/requests/admin/ankete/createAnkete";


export default function AnketeForm({type}){
  
  const dispatch = useDispatch()
  
  const [viewMode, setViewMode] = useState(type === 'view')
  
  const currentAnkete = useSelector((state) => state.ankete.currentAnkete)
  
  const ankete_identifier = useSelector((state) => state.ankete.currentAnkete.identifier)
  const ankete_id = useSelector((state) => state.ankete.currentAnkete.id)
  const ankete_name = useSelector((state) => state.ankete.currentAnkete.name)
  const current_ankete_active = useSelector((state) => state.ankete.currentAnkete.active)
  const current_list_questions = useSelector((state) => state.ankete.currentAnkete.ankete_questions)
  
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
  
  const changeAnketeQuestions = (value, newValue) => {
    dispatch(saveQuestionsChangeAction(value,newValue))
  }
  
  const saveAll = () => {
    console.log('save all')
    const newAnkete = {
      id: anketeId,
      name: anketeName,
      identifier: anketeIdentifier,
      active: anketeActive,
      ankete_questions: anketeQuestions === undefined ? [] : anketeQuestions
    }
    if(type === 'edit'){
      dispatch(applyAnketeToStoreAction(newAnkete))
      dispatch(updateAnketeInListAction())
      
      updateAnkete(newAnkete)
      
      dispatch(editAnketeModalAction(false))
      dispatch(clearCurrentAnketeAction())
    }
    if(type === 'create'){
      console.log(newAnkete)
      dispatch(applyAnketeToStoreAction(newAnkete))
      dispatch(addAnketeToListAction())
      
      createAnkete(newAnkete)
      
      dispatch(createAnketeModalAction(false))
      dispatch(clearCurrentAnketeAction())
    }
    
  }
  console.log(anketeQuestions)
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
        {(type === 'edit' || type === 'view') &&
          <div className="question-form__main-info__item">
            <ListQuestions
              viewMode={viewMode}
              handler={changeAnketeQuestions}
              setValues={setAnketeQuestions}
              values={anketeQuestions}
            />
          </div>
        }
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