
import {SET_AUTH_SUCCESS, CLEAR_AUTH, SET_PERMISSION} from "./actions";

const initialState = {
  autorized: false,
  hasPermissions: true
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_SUCCESS: {
      return {
        ...state,
        autorized: true
      }
    }
    case CLEAR_AUTH : {
      return  {
        ...state,
        autorized: false
      }
    }
    case SET_PERMISSION : {
      return {
        ...state,
        hasPermissions: action.payload
      }
    }
  }
  
  return state
}