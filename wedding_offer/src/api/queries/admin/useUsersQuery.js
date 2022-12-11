import {useQuery} from 'react-query'
import {getUsersRequest} from "../../requests/admin/user/getUsers";

export default function useUsersQuery(){
  return useQuery( 'usersQuery', () => getUsersRequest(), {
    placeholderData: {
      data: {
        result: undefined
      },
    }
  });
}