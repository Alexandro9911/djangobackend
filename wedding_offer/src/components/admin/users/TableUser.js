import '../../../styles/admin/users/usersLayout.sass'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserAction} from "../../../store/admin/users/actions";
import {editUserModalAction} from "../../../store/admin/modals/actions";
import {useEffect, useState} from "react";

export default function TableUser({items}){
  
  const dispatch = useDispatch()
  const [listItems, setListItems] = useState(items)
  const list = useSelector((state) => state.user.usersList)
  
  useEffect(() => {
    setListItems(list)
  }, [items, list])
  
  const getUserActive = (flag) => {
    const text = flag ? 'Активен' : 'Не активен'
    const style = flag ? 'green' : 'red'
    return (
      <div className="user-status">
        <div className="user-status__text">Статус:</div>
        <div className={style}>{text}</div>
      </div>
    )
  }
  
  const onEditClick = (item) => {
    dispatch(setCurrentUserAction(item))
    dispatch(editUserModalAction(true))
  }
  
  const getItemToken = (item) => {
    return item.token
  }
  
  
  const createTable = () => {
    return listItems.map((item, index) => {
      return (
        <div key={index} className="users-table__item">
          <div className="users-table__item__user-item token-text">
            {getItemToken(item)}
          </div>
          <div className="users-table__item__user-item name-text">
            {item.name.length > 0 ? item.name : 'Не задано'}
          </div>
          <div className="users-table__item__user-item">
            {getUserActive(item.active)}
          </div>
          <div className="users-table__item__button-edit" onClick={() => onEditClick(item)}>
            Редактировать
          </div>
        </div>
      )
    })
  }
  
  return (
    <div className="users-table">
      {createTable()}
    </div>
  )
}