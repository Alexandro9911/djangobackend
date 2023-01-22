import {useEffect, useState} from "react";
import AnswersVariants from "./AnswersVariants";
import SingleAnswersVariants from "./SingleAnswersVariants";
import {useSelector} from "react-redux";

export default function QuestionLayout({item}){
  
  const [answers, setAnswers] = useState([])
  
  useEffect(() => {
    if(item) {
      setAnswers( typeof item.answer_variants === "object" ? item.answer_variants : JSON.parse(item.answer_variants))
    }
  }, [])
  
  const answersFromStore = useSelector((state) => state.test.userAnswers)
  const ankete = useSelector((state) => state.userOffer.userInfo.ankete)
  const user = useSelector((state) => state.userOffer.userInfo.user_info)
  
  const sendAnswer = (question) => {
    const dataToSend = {
      ankete: {
        ankete_id: ankete.ankete_id,
        ankete_identifier: ankete.ankete_identifier
      },
      user: {
        user_id: user.user_id,
        user_token: user.user_token
      },
      question: answersFromStore
    }
    console.log('send answer : ', dataToSend)
  }
  
  const mapAnswers = () => {
    if(item.question_multiple) {
      if (answers) {
        return answers.map((el) => {
          return (
            <div key={el.identifier}>
              <AnswersVariants question={item} variant={el} sendAnswer={sendAnswer}/>
            </div>
          )
        })
      }
    } else {
      if(answers) {
        return (<SingleAnswersVariants answers={answers} question={item} sendAnswer={sendAnswer}/>)
      }
    }
  }
  
  return (
    <div className="question">
      <div className="question__question-name">{item.questions_text}</div>
      <div className="question__question-answers">
        {mapAnswers()}
      </div>
    </div>
  )
}