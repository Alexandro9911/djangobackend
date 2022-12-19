import '../../styles/admin/anketeFragment.sass'
import {useEffect, useState} from "react";
import CreateQuestionsCard from "../../components/admin/questions/CreateQuestionsCard";
import QuestionsList from "../../components/admin/questions/QuestionsList";
import AnketeList from "../../components/admin/ankete/AnketeList";
import CreateAnketeCard from "../../components/admin/ankete/CreateAnketeCard";
import AnketeProvider from "../../containers/providers/AnketeProvider";
import QuestionsProvider from "../../containers/providers/QuestionsProvider";

export default function AnketeCreateFragment(){
  const [sectionOneShow, setSectionOneShow] = useState(false)
  const [sectionTwoShow, setSectionTwoShow] = useState(false)
  const [sectionThreeShow, setSectionThreeShow] = useState(false)
  
  const onAccordionAction = (value) => {
    
    if(value === 'one'){
      setSectionOneShow((prev) => !prev)
      setSectionTwoShow(false)
      setSectionThreeShow(false)
    }
    if(value === 'two'){
      setSectionTwoShow((prev) => !prev)
      setSectionOneShow(false)
      setSectionThreeShow(false)
    }
    if(value === 'three'){
      setSectionThreeShow((prev) => !prev)
      setSectionOneShow(false)
      setSectionTwoShow(false)
    }
  }
  
  return (
    <div className="ankete-layout">
      <p>Создание опроса</p>
      <div className="accordeon">
        <div className="accordeon__item">
          <div className="accordeon__item__header" onClick={() => onAccordionAction('one')}>
            <div className="accordeon__item__header__text-header">
              Вопросы
            </div>
          </div>
          {sectionOneShow &&
          <div className="accordeon__item__body">
            <QuestionsProvider>
              <CreateQuestionsCard/>
              <QuestionsList/>
            </QuestionsProvider>
          </div>
          }
        </div>
        <div className="accordeon__item">
          <div className="accordeon__item__header" onClick={() => onAccordionAction('two')}>
            <div className="accordeon__item__header__text-header">
              Созданные анкеты
            </div>
          </div>
          {sectionTwoShow &&
          <div className="accordeon__item__body">
            <AnketeProvider>
              <CreateAnketeCard/>
              <AnketeList/>
            </AnketeProvider>
          </div>
          }
        </div>
        <div className="accordeon__item">
          <div className="accordeon__item__header" onClick={() => onAccordionAction('three')}>
            <div className="accordeon__item__header__text-header">
              Назначение Анкет по пользователям
            </div>
          </div>
          {sectionThreeShow &&
          <div className="accordeon__item__body">
            Таблица пользователей и анкет
          </div>
          }
        </div>
      </div>
    </div>
  )
}