import {
  CLEAR_CURRENT_USER,
  SET_USERS_LIST,
  SET_CURRENT_USER,
  ADD_USER_TO_LIST,
  MODIFY_USER_IN_LIST,
  APPLY_TO_STORE_USER
} from "./actions";

const initialState = {
  usersList: [],
  currentUser: {
    identifier: '',
    id: 0,
    name: '',
    active: '',
    token: '',
    text_offer: '',
    is_admin: ''
  }
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_LIST : {
      let newUsers = []
      newUsers = action.payload
      
      return {
        ...state,
        usersList: newUsers
      }
    }
    case ADD_USER_TO_LIST : {
      return {
        ...state,
        usersList: [...state.usersList, state.currentUser]
      }
    }
    case APPLY_TO_STORE_USER : {
      return {
        ...state,
        currentUser: action.payload
      }
    }
    case SET_CURRENT_USER : {
      return {
        ...state,
        currentUser: action.payload
      }
    }
    case MODIFY_USER_IN_LIST : {
      let newUserList = []
      newUserList = state.usersList.map((item) => {
        if(item.identifier === state.currentUser.identifier){
          return state.currentUser
        } else {
          return item
        }
      })
      return {
        ...state,
        usersList: newUserList
      }
    }
    case CLEAR_CURRENT_USER : {
      return {
        ...state,
        currentUser: action.payload
      }
    }
  }
  return state
}