import '../../styles/offer/sections/program.sass'
import {useSelector} from "react-redux";
import classNames from "classnames";
import Browser from "../../utils/Browser";
export default function Program(){
  
  const afterpaty = useSelector((state) => state.userOffer?.userInfo?.offer_info?.afterpaty)
  
  const composeClasses = () => {
    return classNames({
        'program__title': true,
        'iphone-version': true
      }
    )
  }
  
  
  return (
    <div className="program">
      <div className={composeClasses()}>Программа дня:</div>
      <div className="program__body">
        <div className="program__body__item text-bold">
          Сбор гостей с 14:00 до 14:30
        </div>
        <div className="program__body__item">Торжественная регистрация в 14:40</div>
        <div className="program__body__item text-centered fixed-width">
          Адрес: Дворец бракосочетаний №3 г. Пушкин ул. Садовая 22
        </div>
        <div className="program__body__item">
          Фотосессия с гостями 15:00 - 15:30
        </div>
        <div className="program__body__item text-bold">
          16:00 - Сбор гостей по адресу и фуршет
        </div>
        <div className="program__body__item text-centered fixed-width">
          Адрес:  Пушкинская усадьба, Пос. Федоровское, ул. Зеленая, д. 1
        </div>
        <div className="program__body__item">16:50 - Встреча молодоженов</div>
        <div className="program__body__item">17:00 - Начало праздничного банкета</div>
        <div className="program__body__item">23:00 - Окончание праздничного банкета</div>
        {afterpaty &&
          <>
            <div className="program__body__item">c 23:00 - перемещение в коттедж. </div>
            <div className="program__body__item">24.08.2023 в 14:00 - выезд из коттеджа</div>
          </>
          }
      </div>
    </div>
  )
}