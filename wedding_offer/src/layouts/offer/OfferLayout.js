import '../../styles/offer/general.sass'
import {useEffect, useState} from "react";
import Section from "./Section";
import OfferCard from "../../components/offer/OfferCard";
import Program from "../../components/offer/Program";
import DressCode from "../../components/offer/DressCode";
import Other from "../../components/offer/Other";
import {useSelector} from "react-redux";
import Ankete from "../../components/offer/ankete/Ankete";

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
  
  const selectError = useSelector((state) => state.userOffer.selectError)
  
  return (
    <div className="page-layout" style={getStyles()}>
      <div className="page-layout__colored-back" style={getStyles()}>
        <div className="page-layout__body">
          <div className="page-layout__body__wrapper">
            {/*<div className="title">*/}
            {/*  <div className="title__first-letter">A</div>*/}
            {/*  <div className="title__second-letter">M</div>*/}
            {/*</div>*/}
            {/*{!selectError &&*/}
            {/*  <Section>*/}
            {/*    <OfferCard/>*/}
            {/*  </Section>*/}
            {/*}*/}
            {/*{selectError &&*/}
            {/*  <div>*/}
            {/*    <div className="offer-card__main-text">*/}
            {/*      Мы приглашаем вас поучаствовать в торжественном мероприятии в честь нашей свадьбы*/}
            {/*    </div>*/}
            {/*    <div className="offer-card__main-text">*/}
            {/*      Ваши Александр и Марина*/}
            {/*    </div>*/}
            {/*    <div className="offer-card__bottom-text">*/}
            {/*      23 августа 2023 года*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*}*/}
            {/*<Section>*/}
            {/*  <Program/>*/}
            {/*</Section>*/}
            {/*<Section>*/}
            {/*  <DressCode/>*/}
            {/*</Section>*/}
            {/*<Section>*/}
            {/*  <Other/>*/}
            {/*</Section>*/}
            {!selectError &&
              <Ankete/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}