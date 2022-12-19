import {
  INIT_USER_STORE,
  SELECT_ERROR
} from "./actions";

const initialState = {
  id: -1,
  token: '',
  name: '',
  offerText: '',
  
  selectError: false
}

export const userOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER_STORE: {
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        offerText: action.payload.offerText,
        name: action.payload.name
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