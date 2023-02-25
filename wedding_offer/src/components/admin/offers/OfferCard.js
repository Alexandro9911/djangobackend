import '../../../styles/admin/offers/offersFragment.sass'
import {getLinkWithHost} from "../../../api/configs/configs";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editOfferModalAction} from "../../../store/admin/modals/actions";
import {setCurrentOfferAction} from "../../../store/admin/offer/actions";

export default function OfferCard({item}){
  
  const [isActual, setIsActual] = useState(true)
  
  const dispatch = useDispatch()
  
  const getComputedLink = () => {
    return 'http://alexandr-and-marina-wedding.ru:8000/?token=' +  item.userToken
  }
  
  const onClickChange = () => {
    //setIsActual(false)
    dispatch(setCurrentOfferAction(item))
    dispatch(editOfferModalAction(true))
  }
  
  const getClassesItem = () => {
    return isActual ? 'offer-item' : 'offer-item not-actual'
  }
  
  const getOfferStatus = () => {
    
    const text = item.offerActive ? 'Активно' : 'Не активно'
    const classes = item.offerActive ? 'statuses is-active' : 'statuses not-active'
    return (
      <div className={classes}>{text}</div>
    )
  }
  
  const getAnketeStatus = () => {
    const text = item.anketeActive ? 'Активнa' : 'Не активна'
    const classes = item.anketeActive ? 'statuses is-active' : 'statuses not-active'
    return (
      <div className={classes}>{text}</div>
    )
  }
  
  return (
    <div key={item.identifier} className={getClassesItem()}>
      {!isActual &&
        <div className="offer-item__small-text">Внимание! Данные могут быть не актуальны. Обновите страницу</div>
      }
      <div className="offer-item__header">
        <div className="offer-item__info-card">
          <div className="offer-item__info-card__item-layout">
            <div className="bold">
              Приглашение для:
            </div>
            <div>
              {item.userName}
            </div>
          </div>
          <div className="offer-item__info-card__item-layout">
            <div className="bold">
              Анкета в конце:
            </div>
            <div>
              {item.anketeName}
            </div>
          </div>
          <div className="offer-item__info-card__item-layout">
            <div className="bold">
              Статус приглашения:
            </div>
            {getOfferStatus()}
          </div>
          <div className="offer-item__info-card__item-layout">
            <div className="bold">
              Статус анкеты:
            </div>
            {getAnketeStatus()}
          </div>
          
          <div className="offer-item__info-card__item-layout offer-item__link-wrapper">
            <div className="bold">
              Ссылка на приглашение:
            </div>
            <div>
              {getComputedLink()}
            </div>
          </div>
        </div>
        <div className="offer-item__button-block">
          <div className="offer-item__button-block__item" onClick={onClickChange}>
            Изменить
          </div>
        </div>
      </div>
    </div>
  )
}