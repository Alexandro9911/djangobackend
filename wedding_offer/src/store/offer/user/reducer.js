import {
  INIT_USER_STORE,
  SELECT_ERROR
} from "./actions";

const initialState = {
  
  userInfo: {},
  
  selectError: false
}

export const userOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER_STORE: {
      console.log(action.payload)
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