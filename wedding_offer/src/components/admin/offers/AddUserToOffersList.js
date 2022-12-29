import '../../../styles/admin/offers/addOfferButton.sass'
import CustomSelect from "../ui/CustomSelect";
import {useEffect, useState} from "react";
import SimpleSelect from "../ui/SimpleSelect";
import {useSelector} from "react-redux";

export default function AddUserToOffersList(){
  
  const [dropdownState, setDropdownState] = useState(false)
  const [options, setOptions] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  
  const usersFromStore = useSelector((state) => state.user.usersList)
  
  useEffect(() => {
    if(usersFromStore.length > 0){
      const preparedOptions = usersFromStore.filter((item) => {
        if(item.active){
          return {
            key: item.identifier,
            value: item,
            name: item.name
          }
        }
      })
      setOptions(preparedOptions)
    }
  }, [usersFromStore])
  
  
  const onClickButton = () => {
    setDropdownState(true)
  }
  
  const hideDropdown = () => {
    setDropdownState(false)
  }
  
  const onSelectItem = (value) => {
    console.log(value)
    setSelectedUser(value)
  }
  
  return (
    <div className="add-offer-layout">
      <div className="add-offer-button" onClick={onClickButton}>
        <div className="add-offer-button__text">
          Добавить приглашение +
        </div>
      </div>
      {dropdownState &&
        <div className="add-offer-layout__mini-form">
          <SimpleSelect
            value={selectedUser}
            options={options}
            onSelectHandler={onSelectItem}
            placeholder={'Приглашенный пользователь'}
          />
        </div>
      }
    </div>
  )
}