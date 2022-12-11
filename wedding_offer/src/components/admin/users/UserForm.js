import '../../../styles/admin/users/usersForm.sass'
import StyledInput from "../ui/input";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRandomIdentifier} from "../../../utils/utils";
import Toggle from "../ui/toggle";
import {
  createUserModalAction, editUserModalAction,
} from "../../../store/admin/modals/actions";
import {
  addUserToListAction, applyChangesToUserInListAction,
  applyToStoreCurrentUserAction,
  clearCurrentUserAction
} from "../../../store/admin/users/actions";
import {sendNewUser} from "../../../api/requests/admin/user/sendNewUser";
import {sendUserUpdations} from "../../../api/requests/admin/user/sendUserUpdations";

export default function UserForm({type}){
  
  const dispatch = useDispatch()
  
  const [viewMode, setViewMode] = useState(type === 'view')
  
  const currentUser = useSelector((state) => state.user.currentUser)
  
  const user_identifier = useSelector((state) => state.user.currentUser.identifier)
  const current_id = useSelector((state) => state.user.currentUser.id)
  const current_name = useSelector((state) => state.user.currentUser.name)
  const current_user_active = useSelector((state) => state.user.currentUser.active)
  const current_token = useSelector((state) => state.user.currentUser.token)
  const text_offer = useSelector((state) => state.user.currentUser.text_offer)
  const is_admin = useSelector((state) => state.user.currentUser.is_admin)
  
  const [userIdentifier, setUserIdentifier] = useState(user_identifier)
  const [userId, setUserId] = useState(current_id)
  const [userName, setUserName] = useState(current_name)
  const [userActive, setUserActive] = useState(current_user_active)
  const [userToken, setUserToken] = useState(current_token)
  const [textOffer, setTextOffer] = useState(text_offer)
  const [isAdmin, setIsAdmin] = useState(is_admin)
  
  useEffect(() => {
    setUserIdentifier(user_identifier)
    setUserId(current_id)
    setUserName(current_name)
    setUserActive(current_user_active)
    setUserToken(current_token)
    setTextOffer(text_offer)
    setIsAdmin(is_admin)
  }, [current_name, current_id,current_token, current_user_active,text_offer, is_admin ])
  
  useEffect(() => {
    if(type === 'create'){
      setUserIdentifier(getRandomIdentifier())
      setUserToken(getRandomIdentifier())
    }
  }, [])
  
  const nameChangeHandler = (name) => {
    setUserName(name)
  }
  
  const changeActiveHandler = (value) => {
    setUserActive(value)
  }
  
  const tokenClickHandler = () => {
    setUserToken(getRandomIdentifier())
    console.log(userToken.length)
  }
  
  const textOfferHandler = (value) => {
    setTextOffer(value)
  }
  
  const isAdminHandler = (value) => {
    setIsAdmin(value)
  }
  
  const saveAllHandler = () => {
    
    const currentUser = {
      identifier: userIdentifier,
      id: userId,
      name: userName,
      active: userActive,
      token: userToken,
      text_offer: textOffer,
      is_admin: ''
    }
    
    dispatch(applyToStoreCurrentUserAction(currentUser))
    
    if(type === 'create'){
      dispatch(addUserToListAction())
      dispatch(createUserModalAction(false))
      sendNewUser(currentUser)
    }
    if(type === 'edit'){
      dispatch(applyChangesToUserInListAction())
      dispatch(editUserModalAction(false))
      sendUserUpdations(currentUser)
    }
    
    dispatch(clearCurrentUserAction())
    
  }
  
  return (
    <div className="user-form">
      <div className="user-form__field">
        <b>ID: {userId}</b>
      </div>
      <div className="user-form__field">
        <Toggle
          value={userActive}
          handler={changeActiveHandler}
          label={'Пользователь активен'}
          onlyView={viewMode}
        />
      </div>
      <div className="user-form__field">
        <StyledInput
          label={'Имя'}
          value={userName}
          type={'text'}
          placeholder={'Введите Имя/Имена'}
          handler={nameChangeHandler}
          disabled={viewMode}
          maxWidthRequired={true}
        />
      </div>
      <div className="user-form__field">
        <StyledInput
          label={'Обращение'}
          value={textOffer}
          type={'text'}
          placeholder={'Введите обращение'}
          handler={textOfferHandler}
          disabled={viewMode}
          maxWidthRequired={true}
        />
      </div>
      <div className="user-form__field">
        <StyledInput
          label={'Токен'}
          value={userToken}
          type={'text'}
          placeholder={'Токен пользователя'}
          disabled={true}
          maxWidthRequired={true}
        />
      </div>
      <div className="user-form__field">
        <div className="user-form__button-reset" onClick={tokenClickHandler}>Пересоздать токен</div>
      </div>
      <div className="user-form__field">
      { !viewMode &&
        <div className="question-form__main-info__item">
          <div
            className="question-form__main-info__item__button-save-all"
            onClick={saveAllHandler}
          >
            Сохранить все изменения
          </div>
        </div>
        }
      </div>
    </div>
  )
}