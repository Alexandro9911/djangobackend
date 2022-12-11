import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import OfferLayout from "../layouts/OfferLayout";

export default function OfferContainer(){
  
  const [token, setToken] = useState('')
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
  
  }, [])
  
  return (
    <div>
      {loading &&
        <div>loader</div>
      }
      {!loading &&
        <OfferLayout/>
      }
    </div>
  )
}