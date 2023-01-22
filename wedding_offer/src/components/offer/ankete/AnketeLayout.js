import {useEffect, useState} from "react";
import QuestionLayout from "./QuestionLayout";
import '../../../styles/offer/ankete/ankete.sass'
import {useDispatch} from "react-redux";
import {initTestStoreAction} from "../../../store/offer/test/actions";

export default function AnketeLayout({ankete, questions, userAnswers}){
  
  const [newUserAnswers, setNewUserAnswers] = useState([])
  const [questionsList, setQuestionsList] = useState([])
  
  const dispatch = useDispatch()
  
  useEffect(() => {
      let questCopy = questions
      let newArrQuest = questCopy.map((item) => {
    
        let newItem = item
        const oldAnswers = typeof item.answer_variants === "object" ? item.answer_variants :JSON.parse(item.answer_variants)
    
        newItem.answer_variants = oldAnswers.map((answer) => {
          let newAnswer = answer
          answer.checked = false
          return newAnswer
        })
        return newItem
      })
      dispatch(initTestStoreAction(newArrQuest))
      setQuestionsList(newArrQuest)
    
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
  
  return (
    <>
      {questionsList.length > 0 &&
      <div className="questions-list-ankete">
        {getQuestions()}
      </div>
      }
    </>
  )
}