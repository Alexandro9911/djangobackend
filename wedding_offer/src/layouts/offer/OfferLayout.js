import '../../styles/offer/general.sass'
import {useEffect, useState} from "react";
import Section from "./Section";
import OfferCard from "../../components/offer/OfferCard";
import Program from "../../components/offer/Program";
import DressCode from "../../components/offer/DressCode";
import Other from "../../components/offer/Other";

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
            <div className="title">
              <div className="title__first-letter">A</div>
              <div className="title__second-letter">M</div>
            </div>
            <Section>
              <OfferCard/>
            </Section>
            <Section>
              <Program/>
            </Section>
            <Section>
              <DressCode/>
            </Section>
            <Section>
              <Other/>
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