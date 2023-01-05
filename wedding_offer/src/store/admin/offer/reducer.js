import {
  ADD_OFFER_TO_LIST,
  FILL_OFFERS_LIST,
  MODIFY_OFFER_ON_LIST,
  SET_CURRENT_OFFER_ACTION
} from "./actions";

const initialState = {
  offersList: [],
  currentOffer: {}
}

export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_CURRENT_OFFER_ACTION : {
      return {
        ...state,
        currentOffer: action.payload
      }
    }
    
    case ADD_OFFER_TO_LIST : {
      return {
        ...state,
        offersList: [...state.offersList, action.payload]
      }
    }
    case FILL_OFFERS_LIST : {
      return {
        ...state,
        offersList: action.payload
      }
    }
    
    case MODIFY_OFFER_ON_LIST : {
      let oldList = []
      let newOffer = state.offersList.filter((elem) => elem.offerId !== action.payload.offerId)
      newOffer.push(action.payload)
      
      oldList = newOffer
      
      return {
        ...state,
        offersList: oldList
      }
    }
  }
  return state
}