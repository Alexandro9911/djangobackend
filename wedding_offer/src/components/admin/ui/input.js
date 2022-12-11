import '../../../styles/admin/ui/input.sass'

export default function StyledInput({
  label = '',
  placeholder = '',
  value = '',
  hasError = false,
  errorText = '',
  handler,
  type,
  disabled = false,
  maxWidthRequired = false
}){
  
  const handleChange = (e) => {
    handler(e.target.value)
  }
  
  const getInputStyle = () => {
    if(hasError){
      return {border: '1px solid red'}
    } else {
      return {}
    }
  }
  
  const getStyles = () => {
    if(maxWidthRequired){
      return 'custom-input__question max-width'
    } else {
      return 'custom-input__question'
    }
  }
  
  return (
    <div className="custom-input">
      <div className={getStyles()}>
        <div className="custom-input__question__label">{label}</div>
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e)}
          style={getInputStyle()}
          type={type}
          disabled={disabled}
        />
      </div>
      {hasError &&
        <div className="custom-input__error">{errorText}</div>
      }
    </div>
  )
}