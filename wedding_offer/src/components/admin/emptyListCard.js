import '../../styles/admin/emptyList.sass'

export default function EmptyListCard({text, colored}){
  
  const getStyle = () => {
    return colored ? 'list-empty-card colored' : 'list-empty-card'
  }
  
  return (
    <div className={getStyle()}>
      <div className="list-empty-card__text">{text}</div>
    </div>
  )
}