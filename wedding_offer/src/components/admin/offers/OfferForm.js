import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Toggle from "../ui/toggle";
import SimpleSelect from "../ui/SimpleSelect";
import '../../../styles/admin/offers/offersFragment.sass'
import {modifyOfferInListAction} from "../../../store/admin/offer/actions";
import {editOfferModalAction} from "../../../store/admin/modals/actions";
import {editOfferRequest} from "../../../api/requests/admin/offer/editOffer";

export default function OfferForm(){
  
  const currentOffer = useSelector((state) => state.offer.currentOffer)
  
  const [offerActiveToggle, setOfferActiveToggle] = useState(currentOffer.offerActive)
  const [optionsAnkete, setOptionsAnkete] = useState([])
  const [selectedAnkete, setSelectedAnkete] = useState(null)
  
  const dispatch = useDispatch()
  
  const onToggleClick = (value) => {
    setOfferActiveToggle(value)
  }
  
  const anketeListFromStore = useSelector((state) => state.ankete.anketeList)
  
  const getStatusItem  = (item) => {
    return item.active ? ' ( Активнен )' : ' ( Не активен )'
  }
  
  const onSaveClick = () => {
    
    const newAnkete = anketeListFromStore.filter((el) => el.identifier === selectedAnkete.key)
    
    let modifyedItem = {
      ...currentOffer,
      anketeName: newAnkete[0].name,
      anketeIdentifier: newAnkete[0].identifier,
      anketeActive: newAnkete[0].active,
      anketeId: newAnkete[0].id,
      offerActive: offerActiveToggle
    }
    dispatch(modifyOfferInListAction(modifyedItem))
    dispatch(editOfferModalAction(false))
    editOfferRequest(modifyedItem)
  }
  
  const getCurrentAnketeFromPrepared = (list) => {
    const findingIdentifier = currentOffer.anketeIdentifier
    let res = list.filter((elem) => elem.key === findingIdentifier)
    if(res.length > 0) {
      setSelectedAnkete(res[0])
    }
  }
  
  useEffect(() => {
    if(anketeListFromStore){
      const preparedOptionsAnkete = anketeListFromStore.map((item) => {
        const nameFinal = item.name + getStatusItem(item)
        return {
          key: item.identifier,
          value: item,
          name: nameFinal
        }
      })
      
      setOptionsAnkete(preparedOptionsAnkete)
      getCurrentAnketeFromPrepared(preparedOptionsAnkete)
    }
  }, [anketeListFromStore])
  
  return (
    <div className="form-offer">
      <Toggle
        value={offerActiveToggle}
        handler={onToggleClick}
        label={'Приглашение активно: '}
        onlyView={false}
      />
      <div>
        Внимание! если поменять опрос в приглашении, ответы пользователя на вопросы с предыдущего опроса исчезнут.
      </div>
      <SimpleSelect
        value={selectedAnkete}
        placeholder={'Выбранный опрос'}
        onSelectHandler={setSelectedAnkete}
        options={optionsAnkete}
        disabled={false}
      />
      <div className="form-offer__button-save" onClick={onSaveClick}>
        Сохранить
      </div>
    </div>
  )
}