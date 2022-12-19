import '../../styles/admin/auth.sass'
import {useEffect, useState} from "react";

export default function AuthLayout({children}){
  
  const [height, setHeight] = useState(100)
  
  useEffect(() => {
    const currHeight = window.innerHeight - 10
    setHeight(currHeight);
  }, [])
  
  return (
    <div className="auth-layout" style={{height: height}}>
      {children}
    </div>
  )
}