import {useEffect, useState} from "react";
import '../../../styles/admin/ui/simpleSelect.sass'

/**
 *
 * @param value
 * @param placeholder
 * @param disabled
 * @param options должны быть в виде
 * {
 *  key: identifier: string or int
 *  value: any
 *  name: string
 * }
 * @param onSelectHandler
 * @returns {JSX.Element}
 * @constructor
 */
export default function SimpleSelect(
  {
   value,
   placeholder = 'Выберите значение',
   disabled = false,
   options = [],
   onSelectHandler
 }
){
  
  const [dropdownState, setDropdownState] = useState(false)
  
  const mapOptions = () => {
    if(options.length === 0){
     return (
        <div>
          Нет вариантов
        </div>
     )
    } else {
      return options.map((item) => {
        return (
          <div key={item.key}
               className="option-item"
               onClick={(e) => onSelectItem(e,item)}>
            {item.name}
          </div>
        )
      })
    }
  }
  
  const getTextInput = () => {
    return value?.name ? value.name : placeholder
  }
  
  const closeDropdown = () => {
    setDropdownState(false)
  }
  
  const onClickInput = () => {
    if(!disabled) {
      setDropdownState((prev) => !prev)
    }
  }
  
  const onSelectItem = (event, value) => {
    onSelectHandler(value)
    closeDropdown()
  }
  
  return (
    <div className="simple-select">
      <div className="simple-select__input" onClick={onClickInput} >
        <div className="simple-select__input__value">{getTextInput()}</div>
      </div>
      {dropdownState && !disabled &&
        <div className="simple-select__dropdown">
          <div className="simple-select__dropdown__items">
            {mapOptions()}
          </div>
        </div>
      }
    </div>
  )
}