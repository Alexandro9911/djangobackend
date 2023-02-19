import {useSelector} from "react-redux";
import '../../../src/styles/offer/sections/other.sass'

export default function CopyPopUp(){
  
  const showPopUp = useSelector((state) => state.userOffer.showPopUp)
  
  return (
    <div className="showPopUp">
      { showPopUp &&
        <div className="showPopUp__body">Телефон скопирован</div>
      }
    </div>
  )
}