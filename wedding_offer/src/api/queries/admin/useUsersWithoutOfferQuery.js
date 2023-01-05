import {useQuery} from 'react-query'
import {getUsersWithoutOfferRequest} from "../../requests/admin/user/usersWithoutOffers";

export default function useUsersWithoutOfferQuery(){
  return useQuery( 'usersQuery', () => getUsersWithoutOfferRequest(), {
    placeholderData: {
      data: {
        result: undefined
      },
    }
  });
}