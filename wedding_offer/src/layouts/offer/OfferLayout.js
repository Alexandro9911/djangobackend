import '../../styles/offer/general.sass'
import {useEffect, useState} from "react";
import Section from "./Section";
import OfferCard from "../../components/offer/OfferCard";
import Program from "../../components/offer/Program";
import DressCode from "../../components/offer/DressCode";
import Other from "../../components/offer/Other";
import {useSelector} from "react-redux";
import Ankete from "../../components/offer/ankete/Ankete";
import CopyPopUp from "../../components/offer/CopyPopUp";
import classNames from "classnames";
import Browser from "../../utils/Browser";

export default function OfferLayout(){
  
  const [height, setHeight] = useState(100)
  
  useEffect(() => {
    const currHeight = window.innerHeight -1
    setHeight(currHeight);
  }, [])
  
  const getStyles = () => {
    return {
      minHeight: '100vh',
      maxHeight: '100vh'
    }
  }
  
  const selectError = useSelector((state) => state.userOffer.selectError)
  
  const composeFirstLetterClasses = () => {
    return classNames({
        'title__first-letter': true,
        'iphone-version': true
      }
    )
  }
  
  const composeSecondLetterClasses = () => {
    return classNames({
      'title__second-letter': true,
      'iphone-version': true
      }
    )
  }
  
  return (
    <div className="page-layout">
      <div className="page-layout__colored-back">
        <div className="page-layout__body">
          <div className="page-layout__body__wrapper">
            <div className="title">
              <div className={composeFirstLetterClasses()}>A</div>
              <div className={composeSecondLetterClasses()}>M</div>
            </div>
            {!selectError &&
              <Section>
                <OfferCard/>
              </Section>
            }
            {selectError &&
              <div>
                <div className="offer-card__main-text">
                  Мы приглашаем вас поучаствовать в торжественном мероприятии в честь нашей свадьбы
                </div>
                <div className="offer-card__main-text">
                  Ваши Александр и Марина
                </div>
                <div className="offer-card__bottom-text">
                  23 августа 2023 года
                </div>
              </div>
            }
            <Section>
              <Program/>
            </Section>
            <Section>
              <DressCode/>
            </Section>
            <Section>
              <Other/>
            </Section>
            {!selectError &&
              <Ankete/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}