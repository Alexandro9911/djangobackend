import '../../styles/offer/sections/other.sass'

export default function Other(){
  
  return (
    <div className="other">
      <div className="other__title">
        Остальные детали
      </div>
      <div className="other__text centered margin-md">
        Убедительная просьба, не дарить нам цветы. Если хочется чем-то сопроводить подарок -
        лучше подарить нам бутылочку алкоголя для нашей домашней коллекции.
      </div>
      <div className="other__text centered margin-lg">
        Мы не хотим обременять вас выбором подарка, поэтому, будем рады вкладу в бюджет нашей молодой семьи.
      </div>
      <div className="other__text margin-sm">
        <div>Просьба не звонить нам в день праздника.</div>
        <div>По всем вопросам обращаться по телефонам:</div>
      </div>
      <div className="other__telephones">
        <div className="other__telephones__item"><span>8 (921) 638 - 12 - 24 </span> — Евгения (мама невесты)</div>
        <div className="other__telephones__item"><span>8 (911) 224 - 43 - 36 </span> — Елена (мама жениха)</div>
        <div className="other__telephones__item"><span>8 (911) 784 - 20 - 83</span> — Артемий</div>
      </div>
    </div>
  )
}