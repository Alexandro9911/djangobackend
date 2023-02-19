import {
  INIT_USER_STORE,
  SELECT_ERROR,
  SHOW_POPUP_ACTION
} from "./actions";

const initialState = {
  
  userInfo: {},
  
  selectError: false,
  showPopUp: false
}

export const userOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POPUP_ACTION: {
      return {
        ...state,
        showPopUp: action.payload
      }
    }
    case INIT_USER_STORE: {
      return {
        ...state,
        userInfo: action.payload
      }
    }
    case SELECT_ERROR: {
      return {
        ...state,
        selectError: action.payload
      }
    }
  }
  return state
}