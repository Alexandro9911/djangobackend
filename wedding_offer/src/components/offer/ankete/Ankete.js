import {useSelector} from "react-redux";
import AnketeLayout from "./AnketeLayout";
import '../../../styles/offer/ankete/ankete.sass'
export default function Ankete(){
  
  const ankete = useSelector((state) => state.userOffer.userInfo?.ankete)
  const questions = useSelector((state) => state.userOffer.userInfo?.ankete?.questions)
  const userAnswers = useSelector((state) => state.userOffer.userInfo?.ankete?.user_answers)
  
  return (
    <>
      {ankete?.ankete_active &&
      <div className="offer-ankete-layout">
          <div className="offer-ankete-layout__header">
            <p>
              Мы хотим, чтобы вам было максимально комфортно.
              Для этого нам надо, чтобы вы ответили на несколько вопросов
            </p>
            <p>
              Если вы захотите внести изменения в ваши ответы,
              огромная просьба сделать это не позднее 23 июля 2023 года.
            </p>
          </div>
          <AnketeLayout ankete={ankete} questions={questions} userAnswers={userAnswers} />
      </div>
      }
    </>
  )
}