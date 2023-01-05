export const FILL_OFFERS_LIST = 'FILL_OFFERS_LIST'
export const MODIFY_OFFER_ON_LIST = 'MODIFY_OFFER_ON_LIST'
export const ADD_OFFER_TO_LIST = 'ADD_OFFER_TO_LIST'
export const SET_CURRENT_OFFER_ACTION = 'SET_CURRENT_OFFER_ACTION'

export const fillOffersListAction = (list) => ({
  type: FILL_OFFERS_LIST,
  payload: list
})

export const modifyOfferInListAction = (offer) => ({
  type: MODIFY_OFFER_ON_LIST,
  payload: offer
})

export const addOfferToListAction = (offer) => ({
  type: ADD_OFFER_TO_LIST,
  payload: offer
})

export const setCurrentOfferAction = (offer) => ({
  type: SET_CURRENT_OFFER_ACTION,
  payload: offer
})
