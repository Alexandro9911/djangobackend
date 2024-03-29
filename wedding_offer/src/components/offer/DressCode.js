import '../../styles/offer/sections/dresscode.sass'
import classNames from "classnames";
import Browser from "../../utils/Browser";

export default function DressCode(){
  
  const composeClasses = () => {
    return classNames({
        'dresscode__title': true,
        'iphone-version': true
      }
    )
  }
  
  return (
    <div className="dresscode">
      <div className={composeClasses()}>Дресс код:</div>
      <div className="dresscode__text">
        Дорогие гости, нам очень важно, чтобы вы присутствовали на нашем празднике,
        и будем признательны если вы поддержите примерную цветовую концепцию праздника:
      </div>
      <div className="dresscode__color-section">
        <div className="dresscode__color-section__title">Девушки</div>
        <div className="dresscode__color-section__colors">
          <div className="dresscode__color-section__colors__item women-1"/>
          <div className="dresscode__color-section__colors__item women-2"/>
          <div className="dresscode__color-section__colors__item women-3"/>
          <div className="dresscode__color-section__colors__item women-4"/>
        </div>
        <div className="dresscode__color-section__colors">
          <div className="dresscode__color-section__colors__item women-5"/>
          <div className="dresscode__color-section__colors__item women-6"/>
          <div className="dresscode__color-section__colors__item women-7"/>
          <div className="dresscode__color-section__colors__item women-8"/>
        </div>
      </div>
      <div className="dresscode__color-section">
        <div className="dresscode__color-section__title">Мужчины</div>
        <div className="dresscode__color-section__colors">
          <div className="dresscode__color-section__colors__item man-1"/>
          <div className="dresscode__color-section__colors__item man-2"/>
          <div className="dresscode__color-section__colors__item man-3"/>
          <div className="dresscode__color-section__colors__item man-4"/>
        </div>
        <div className="dresscode__color-section__colors">
          <div className="dresscode__color-section__colors__item man-5"/>
          <div className="dresscode__color-section__colors__item man-6"/>
        </div>
      </div>
      <div className="dresscode__text margined">
        P.S. Не привествуются джинсы, шорты и спортивные штаны в любом виде, а также очень яркий цвет одежды.
        Пожалуйста, уважайте концепцию нашего праздника. Это важно для нас и для получения качественных фотографий.
      </div>
    </div>
  )
}