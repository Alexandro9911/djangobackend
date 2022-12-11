import '../../../styles/admin/ui/simpleButton.sass'

export default function SimpleButton({text, onClickHandler, style = null}){
 
  const handler = () => {
    onClickHandler()
  }
  
  const getButtonStyle = () => {
    if(style !== null){
      return style
    } else {
      return "simple-button"
    }
  }
  
  return (
    <button className={getButtonStyle()} onClick={handler}>{text}</button>
  )
}