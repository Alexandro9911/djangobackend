import '../../../styles/admin/ui/customSelect.sass'
import {useState} from "react";

export default function CustomSelect(
  {
    value,
    handler,
    disabled,
    options,
    placeholder = 'Выберите значение'
  }
){
  
  const [dropdownState, setDropdownState] = useState(false)
  
  const onInputClick = () => {
    if(!disabled) {
      setDropdownState((prev) => !prev)
    }
  }
  
  const onOptionClick = (e, newValue) => {
    setDropdownState(false)
    handler(value,newValue)
  }
  
  const mapOptions = () => {
    return options.map((item) => {
      return (
        <div className="custom-select__dropdown__layout__item"
             key={item.identifier}
             onClick={(e) => onOptionClick(e,item)}
        >
          {item.name}
        </div>
      )
    })
  }
  
  const getText = () => {
    return (value && value.length > 0) ? value.question.name : placeholder
  }
  
  const getStyle = () => {
    return dropdownState ? "custom-select__dropdown open" : "custom-select__dropdown closed"
  }
  
  return (
    <div className="custom-select">
      <div className="custom-select__input" onClick={onInputClick}>
        <div className="custom-select__input__value">{getText()}</div>
      </div>
      <div className={getStyle()}>
        <div className="custom-select__dropdown__layout">
          {mapOptions()}
        </div>
      </div>
    </div>
  )
}