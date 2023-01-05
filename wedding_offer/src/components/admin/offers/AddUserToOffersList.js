import '../../../styles/admin/offers/addOfferButton.sass'
import CustomSelect from "../ui/CustomSelect";
import {useEffect, useState} from "react";
import SimpleSelect from "../ui/SimpleSelect";
import {useDispatch, useSelector} from "react-redux";
import useUsersWithoutOfferQuery from "../../../api/queries/admin/useUsersWithoutOfferQuery";
import {getRandomIdentifier} from "../../../utils/utils";
import {addOfferRequest} from "../../../api/requests/admin/offer/addOffer";
import {addOfferToListAction} from "../../../store/admin/offer/actions";

export default function AddUserToOffersList(){
  
  
  const {data:  { data }, isLoading, isFetching } = useUsersWithoutOfferQuery()
  const loading = isLoading || isFetching
  
  const [dropdownState, setDropdownState] = useState(false)
  const [optionsUsers, setOptionsUsers] = useState([])
  const [optionsAnkete, setOptionsAnkete] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedAnkete, setSelectedAnkete] = useState(null)
  
  const anketeListFromStore = useSelector((state) => state.ankete.anketeList)
  
  const dispatch = useDispatch()
  
  const getStatusItem  = (item) => {
    return item.active ? ' ( Активнен )' : ' ( Не активен )'
    
  }
  useEffect(() => {
    if(!loading && data.result){
      const preparedOptionsUser = data.result.map((item) => {
          const nameFinal = item.name + getStatusItem(item)
          return {
            key: item.identifier,
            value: item,
            name: nameFinal
          }
      })
      
      const preparedOptionsAnkete = anketeListFromStore.map((item) => {
        const nameFinal = item.name + getStatusItem(item)
        return {
          key: item.identifier,
          value: item,
          name: nameFinal
        }
      })
  
      setOptionsAnkete(preparedOptionsAnkete)
      setOptionsUsers(preparedOptionsUser)
    }
  }, [data, loading])
  
  
  const onClickButton = () => {
    setDropdownState((prev) => !prev)
  }
  
  const hideDropdown = () => {
    setDropdownState(false)
  }
  
  const onSelectItemUser = (value) => {
    setSelectedUser(value)
  }
  
  const onSelectItemAnkete = (value) => {
    setSelectedAnkete(value)
  }
  
  const onSaveClick = () => {
    const data = {
      offerId: -1,
      identifier: getRandomIdentifier(),
      offerActive: true,
      userName: selectedUser.value.name,
      userId: selectedUser.value.id,
      userIdentifier: selectedUser.value.identifier,
      userActive: selectedUser.value.active,
      anketeActive: selectedAnkete.value.active,
      anketeIdentifier: selectedAnkete.value.identifier,
      anketeId: selectedAnkete.value.id,
      anketeName: selectedAnkete.value.name,
      userToken: selectedUser.value.token
    }
    
    addOfferRequest(data)
    dispatch(addOfferToListAction(data))
    hideDropdown()
    
  }
  
  return (
    <div className="add-offer-layout">
      <p>Внимание! Если создать приглашение для неактивного пользователя или с неактивной анкетой - опрос не отобразится.</p>
      <p>У одного пользователя может быть только одно приглашение.</p>
      <div className="add-offer-button" onClick={onClickButton}>
        <div className="add-offer-button__text">
          Добавить приглашение +
        </div>
      </div>
      {dropdownState &&
        <div className="add-offer-layout__mini-form">
          <div className="add-offer-layout__mini-form__layout-form">
            <div className="add-offer-layout__mini-form__layout-select">
              <SimpleSelect
                value={selectedUser}
                options={optionsUsers}
                onSelectHandler={onSelectItemUser}
                placeholder={'Приглашенный пользователь'}
              />
              <SimpleSelect
                value={selectedAnkete}
                options={optionsAnkete}
                onSelectHandler={onSelectItemAnkete}
                placeholder={'Опрос в приглашении'}
              />
            </div>
            <div className="add-offer-layout__mini-form__button" onClick={onSaveClick}>Применить</div>
          </div>
        </div>
      }
    </div>
  )
}