import {useDispatch} from "react-redux";
import {editOfferModalAction} from "../../store/admin/modals/actions";
import {setCurrentOfferAction} from "../../store/admin/offer/actions";
import OfferForm from "../../components/admin/offers/OfferForm";

export default function ModalOffer(){
  
  const dispatch = useDispatch()
  
  const onClose = () => {
    dispatch(editOfferModalAction(false))
    dispatch(setCurrentOfferAction({}))
  }
  
  return (
    <div className="modal-window">
      <div className="modal-window__header">
        <div className="modal-window__header__title">
          Редактирование приглашения
        </div>
        <div className="modal-window__header__close" onClick={onClose}>
          Закрыть
        </div>
      </div>
      <div className="modal-window__body">
        <OfferForm/>
      </div>
    </div>
  )
}