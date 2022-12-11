import {useSelector} from "react-redux";
import '../../../styles/admin/users/usersLayout.sass'
import EmptyListCard from "../emptyListCard";
import TableUser from "./TableUser";
import {useEffect, useState} from "react";
export default function UsersList(){
  
  const userList = useSelector((state) => state.user.usersList)
  
  const [items, setItems] = useState([])
  
  useEffect(() => {
    setItems(userList)
  }, [userList])
  
  return (
    <div className="users-list">
      <div className="users-list__header">Таблица пользователей</div>
      <div className="users-list__divider"/>
      <div className="users-list__body">
        {items.length > 0 &&
          <TableUser items={items}/>
        }
        {items.length === 0 &&
          <EmptyListCard text={'Пока что тут нет пользователей :('} colored={false}/>
        }
      </div>
    </div>
  )
  
}