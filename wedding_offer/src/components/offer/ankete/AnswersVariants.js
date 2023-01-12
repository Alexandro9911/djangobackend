import '../../../styles/offer/ankete/ankete.sass'

export default function AnswersVariants({variant, onClickItem}){
  
  console.log(variant)
  return (
    <div className="answer-variant">
      <div className="answer-variant__button">
        <div/>
      </div>
      <div className="answer-variant__label">{variant.text}</div>
    </div>
  )
}