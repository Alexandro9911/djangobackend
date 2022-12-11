import '../../../styles/admin/mainNavbar.sass'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function PageNavBar(){
  
  const [currHeight, setCurrHeight] = useState(window.innerHeight - 86)
  
  useEffect(() => {
    setCurrHeight(window.innerHeight - 86)
  }, [window.innerHeight])
  
  
  return (
    <div className="page-navbar" style={{minHeight: currHeight}}>
        <Link to={'users'} className="page-navbar__item">Пользователи</Link>
        <Link to={'ankete'} className="page-navbar__item">Анкеты</Link>
        <Link to={'statistic'} className="page-navbar__item">Статистика</Link>
    </div>
  )
}