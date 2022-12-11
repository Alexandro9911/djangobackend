import {useEffect, useState} from "react";
import '../../../styles/admin/ui/toggle.sass'
export default function Toggle({value = false, label = '', handler, onlyView = false}){
 
  const [state, setState] = useState(value)
  const [styles, setStyles] = useState('toggle__circle')
  
  useEffect(() => {
    if(state){
      setStyles('toggle__circle active')
    } else {
      setStyles('toggle__circle')
    }
  }, [state])
  
  
  const onClickToggle = () => {
    if(!onlyView) {
      setState((prev) => !prev)
      handler(!state)
    }
  }
  
  const getStyle = () => {
    if(onlyView){
      return 'toggle__place blocked'
    } else {
      return 'toggle__place'
    }
  }
  
  return (
    <div className="toggle-layout">
      <div className="toggle-layout__text">
        {label}
      </div>
      <div className="toggle">
        <div className={getStyle()} onClick={onClickToggle}>
          <div className={styles}/>
        </div>
      </div>
    </div>
  )
}