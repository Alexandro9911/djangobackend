import {useEffect, useState} from "react";
import QuestionLayout from "./QuestionLayout";
import '../../../styles/offer/ankete/ankete.sass'
import {useDispatch} from "react-redux";
import {initTestStoreAction} from "../../../store/offer/test/actions";
import IconLoader from '../../../assets/loader-small.png'

export default function AnketeLayout({ankete, questions, userAnswers}){
  
  const [questionsList, setQuestionsList] = useState([])
  const [buttonLoading, setButtonLoading] = useState(false)
  
  const dispatch = useDispatch()
  
  const prevAnswers = userAnswers === '' ? [] : JSON.parse(userAnswers)
  
  useEffect(() => {
    if(prevAnswers.length === 0) {
      let questCopy = questions
      let newArrQuest = questCopy.map((item) => {
    
        let newItem = item
        const oldAnswers = typeof item.answer_variants === "object" ? item.answer_variants : JSON.parse(item.answer_variants)
    
        newItem.answer_variants = oldAnswers.map((answer) => {
          let newAnswer = answer
          answer.checked = false
          return newAnswer
        })
        return newItem
      })
      dispatch(initTestStoreAction(newArrQuest))
      setQuestionsList(newArrQuest)
    } else {
      dispatch(initTestStoreAction(prevAnswers))
      setQuestionsList(prevAnswers)
    }
    
  }, [ankete, questions, userAnswers])
  
  const getQuestions = () => {
    let res = questionsList.map((item) => {
      return (
        <div key={item.question_identifier}>
          <QuestionLayout item={item}/>
        </div>
      )
    })
    return res
  }
  
  const onClickButton = () => {
    setButtonLoading(true)
    setTimeout(() => {
      setButtonLoading(false)
    }, 1500)
  }
  
  return (
    <>
      {questionsList.length > 0 &&
      <div className="questions-list-ankete">
        {getQuestions()}
      </div>
      }
      <div className="button-save" onClick={onClickButton}>
        {!buttonLoading &&
          <>Сохранить</>
        }
        {buttonLoading && 
          <img className="rot" src={IconLoader} alt={'wait...'}/>
        }
      </div>
    </>
  )
}