import '../../styles/offer/sections/offerCard.sass'
import {useSelector} from "react-redux";
import classNames from "classnames";
import Browser from "../../utils/Browser";

export default function OfferCard(){
  
  const name = useSelector((state) => state.userOffer.userInfo?.user_info?.user_name)
  const textOffer = useSelector((state) => state.userOffer.userInfo?.user_info?.user_text_offer)
  
  const getText = () => {
    if(name && textOffer) {
      return `${textOffer} ${name}`
    }
  }
  
  const composeClasses = (caseStyle) => {
    return classNames({
        'offer-card__title': caseStyle === 'title',
        'offer-card__main-text': caseStyle === 'main',
        'offer-card__bottom-text': caseStyle === 'bottom',
        'iphone-version': true
      }
    )
  }
  
  return (
    <>
      {name && textOffer &&
      <div className="offer-card">
        <div className={composeClasses('title')}>
          {getText()}
        </div>
        <div className={composeClasses('main')}>
          Мы приглашаем вас на торжественное мероприятие в честь нашей свадьбы
        </div>
        <div className={composeClasses('main')}>
          Ваши Александр и Марина
        </div>
        <div className={composeClasses('bottom')}>
          23 августа 2023 года
        </div>
      </div>
      }
    </>
  )
}