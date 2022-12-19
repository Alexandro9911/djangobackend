import AddUserButton from "../../components/admin/users/AddUserButton";
import UsersList from "../../components/admin/users/UsersList";
import '../../styles/admin/users/usersLayout.sass'
import {useEffect} from "react";
import useUsersQuery from "../../api/queries/admin/useUsersQuery";
import {useDispatch} from "react-redux";
import {setUsersListAction} from "../../store/admin/users/actions";
export default function UsersFragment(){
  
  const {data: { data }, isLoading, isFetching } = useUsersQuery()
  const dispatch = useDispatch()
  const loading = isLoading || isFetching
  useEffect(() => {
    if(!loading){
      dispatch(setUsersListAction(data.result))
    }
  },  [data, loading])
  
  return (
    <div className="users-page-layout">
      <p>Пользователи</p>
      <div>
        <div className="users-page-layout__item">
          <AddUserButton/>
        </div>
        <div className="users-page-layout__item">
          <UsersList/>
        </div>
      </div>
    </div>
  )
}