import '../../styles/offer/sections/offerCard.sass'
import {useSelector} from "react-redux";

export default function OfferCard(){
  
  const name = useSelector((state) => state.userOffer.userInfo?.user_info?.user_name)
  const textOffer = useSelector((state) => state.userOffer.userInfo?.user_info?.user_text_offer)
  
  const getText = () => {
    if(name && textOffer) {
      return `${textOffer} ${name}`
    }
  }
  
  return (
    <>
      {name && textOffer &&
      <div className="offer-card">
        <div className="offer-card__title">
          {getText()}
        </div>
        <div className="offer-card__main-text">
          Мы приглашаем вас на торжественное мероприятие в честь нашей свадьбы
        </div>
        <div className="offer-card__main-text">
          Ваши Александр и Марина
        </div>
        <div className="offer-card__bottom-text">
          23 августа 2023 года
        </div>
      </div>
      }
    </>
  )
}