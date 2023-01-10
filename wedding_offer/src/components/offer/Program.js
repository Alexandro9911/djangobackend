import '../../styles/offer/sections/program.sass'
export default function Program(){
  
  return (
    <div className="program">
      <div className="program__title">Программа дня:</div>
      <div className="program__body">
        <div className="program__body__item text-bold">
          Сбор гостей с 14:00 до 14:30
        </div>
        <div className="program__body__item">Торжественная регистрация в 14:40</div>
        <div className="program__body__item text-centered fixed-width">
          Адрес: Дворец бракосочетаний №3 г. Пушкин ул. Садовая 22
        </div>
        <div className="program__body__item">
          Фотосессия с гостями 15:00 - 15:30
        </div>
        <div className="program__body__item text-bold">
          16:00 - Сбор гостей по адресу и фуршет
        </div>
        <div className="program__body__item text-centered fixed-width">
          Адрес:  Пушкинская усадьба, Пос. Федоровское, ул. Зеленая, д. 1
        </div>
        <div className="program__body__item">16:50 - Встреча молодоженов</div>
        <div className="program__body__item">17:00 - Начало праздничного банкета</div>
      </div>
    </div>
  )
}