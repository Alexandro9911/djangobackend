import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import '../../../styles/admin/statistic/statisticFragment.sass'

export default function ViewAnswers(){
  
  const answersDataJson = useSelector((state) => state.statistic.currentAnswersView.values)
  const answersDataAll = useSelector((state) => state.statistic.currentAnswersView)
  
  const [userAnswers, setUserAnswers] = useState([])
  
  useEffect(() => {
    if(answersDataJson?.length > 0){
      setUserAnswers(JSON.parse(answersDataJson))
    }
  }, [answersDataJson])
  
  const mapResults = () => {
    return userAnswers.map((item) => {
      const selectedVariantsView = item.answer_variants.filter((item) => item.checked).map((item) => {
        return (
          <div className="item-result__layout__answers__variant" key={item.identifier}>{item.text}</div>
        )
      })
      return (
        <div className="item-result" key={item.question_identifier}>
          <div className="item-result__layout">
            <div className="item-result__layout__question-name">{item.question_name}</div>
            <div className="item-result__layout__question-text">{item.questions_text}</div>
            <div className="item-result__layout__answers">
              {selectedVariantsView}
            </div>
          </div>
        </div>
     )
    })
  }
  
  return (
    <div className="statistic-view">
      <div className="statistic-view__title">Ответы пользователя {answersDataAll.user_name} {userAnswers.length > 0 ? '' : 'отстуствуют.'}</div>
      <div className="statistic-view__body">
        {mapResults()}
      </div>
    </div>
  )
}