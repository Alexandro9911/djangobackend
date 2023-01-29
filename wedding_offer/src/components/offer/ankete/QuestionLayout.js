import {useEffect, useState} from "react";
import AnswersVariants from "./AnswersVariants";
import SingleAnswersVariants from "./SingleAnswersVariants";
import {useSelector} from "react-redux";
import {sendAnswersRequest} from "../../../api/requests/offer/sendAnswers";

export default function QuestionLayout({item}){
  
  const [answers, setAnswers] = useState([])
  const [prevAnswers, setPrevAnswers] = useState([])
  
  const answersFromStore = useSelector((state) => state.test.userAnswers)
  const ankete = useSelector((state) => state.userOffer.userInfo.ankete)
  const user = useSelector((state) => state.userOffer.userInfo.user_info)
  const prevAnswersJson = useSelector((state) => state.userOffer.userInfo.ankete.user_answers)
  
  useEffect(() => {
    if(item) {
      if(prevAnswersJson !== '') {
        setPrevAnswers(JSON.parse(prevAnswersJson).filter((quest) => quest.question_id === item.question_id)[0].answer_variants)
      } else {
        setPrevAnswers([])
      }
      setAnswers( typeof item.answer_variants === "object" ? item.answer_variants : JSON.parse(item.answer_variants))
    }
  }, [])
  
  const sendAnswer = async () => {
    setTimeout(() => {
      const dataToSend = {
        ankete: {
          ankete_id: ankete.ankete_id,
          ankete_identifier: ankete.ankete_identifier
        },
        user: {
          user_id: user.user_id,
          user_token: user.user_token
        },
        question: JSON.stringify(answersFromStore)
      }
      sendAnswersRequest(dataToSend)
    }, 1000)
  }
  
  const mapAnswers = () => {
    if(item.question_multiple) {
      if (answers) {
        return answers.map((el) => {
          return (
            <div key={el.identifier}>
              <AnswersVariants
                prevAnswers={prevAnswers}
                question={item}
                variant={el}
                sendAnswer={sendAnswer}
              />
            </div>
          )
        })
      }
    } else {
      if(answers) {
        return (
          <SingleAnswersVariants
            prevAnswers={prevAnswers}
            answers={answers}
            question={item}
            sendAnswer={sendAnswer}
          />
        )
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