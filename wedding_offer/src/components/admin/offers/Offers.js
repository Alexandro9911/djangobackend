import '../../../styles/admin/offers/offersFragment.sass'
import AddUserToOffersList from "./AddUserToOffersList";
import AnketeProvider from "../../../containers/providers/AnketeProvider";
import OffersList from "./OffersList";

export default function Offers(){
  
  return (
    <AnketeProvider>
      <div className="offers-fragment">
        <AddUserToOffersList/>
        <OffersList/>
      </div>
    </AnketeProvider>
  )
}