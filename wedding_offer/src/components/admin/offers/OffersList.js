import {useSelector} from "react-redux";
import EmptyListCard from "../emptyListCard";
import '../../../styles/admin/offers/offersFragment.sass'
import OfferCard from "./OfferCard";

export default function OffersList(){
  
  const items = useSelector((state) => state.offer.offersList)
  
  // const data = {
  //   offerId: -1,
  //   offerIdentifier: getRandomIdentifier(),
  //   offerActive: true,
  //   userName: selectedUser.value.name,
  //   userId: selectedUser.value.id,
  //   userIdentifier: selectedUser.value.identifier,
  //   userActive: selectedUser.value.active,
  //   anketeActive: selectedAnkete.value.active,
  //   anketeIdentifier: selectedAnkete.value.identifier,
  //   anketeId: selectedAnkete.value.id,
  //   anketeName: selectedAnkete.value.name,
  //   userToken: selectedUser.value.token
  // }
  
  const mapItems = () => {
    return items.map((item) => {
      return (
        <div key={item.identifier}>
          <OfferCard item={item}/>
        </div>
      )
    })
  }
  
  return (
    <div className="offers-list">
      { items.length > 0 &&
        <div>
          {mapItems()}
        </div>
      }
      { items.length === 0 &&
        <EmptyListCard/>
      }
    </div>
  )
}