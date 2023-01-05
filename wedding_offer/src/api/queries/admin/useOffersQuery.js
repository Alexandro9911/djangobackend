import {useQuery} from 'react-query'
import {getOffersList} from "../../requests/admin/offer/getOffersList";

export default function useOffersQuery(){
  return useQuery( 'offersQuery', () => getOffersList(), {
    placeholderData: {
      data: {
        result: undefined
      },
    }
  });
}