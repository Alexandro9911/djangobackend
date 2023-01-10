import {useQuery} from 'react-query'
import {getUserInfo} from "../../requests/offer/userInfo";

export default function useUserInfoQuery(token = ''){
  return useQuery( 'userInfoQuery', () => getUserInfo(token), {
    placeholderData: {
      data: {
        result: undefined
      },
    }
  });
}