import '../../styles/offer/general.sass'
import {useEffect, useState} from "react";
import Section from "./Section";
import OfferCard from "../../components/offer/OfferCard";

export default function OfferLayout(){
  
  const [height, setHeight] = useState(100)
  
  useEffect(() => {
    const currHeight = window.innerHeight -1
    setHeight(currHeight);
  }, [])
  
  const getStyles = () => {
    return {
      minHeight: height,
      maxHeight: height
    }
  }
  
  return (
    <div className="page-layout" style={getStyles()}>
      <div className="page-layout__colored-back" style={getStyles()}>
        <div className="page-layout__body">
          <div className="page-layout__body__wrapper">
            <Section>
              <OfferCard/>
            </Section>
            <Section>
              Программа
            </Section>
            <Section>
              Дресс код
            </Section>
            <Section>
              Остальноe
            </Section>
            <Section>
              Анкета
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}