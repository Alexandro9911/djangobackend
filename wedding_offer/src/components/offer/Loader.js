import '../../styles/offer/general.sass'
import '../../assets/loader.gif'
export default function Loader() {
  
  return (
    <div className='loader'>
      <img src={require('../../assets/loader.gif')} alt="loading..." />
    </div>
  )
}