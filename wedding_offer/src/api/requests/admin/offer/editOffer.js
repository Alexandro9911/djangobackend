import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const editOfferRequest = async (offer)  => {
  
  let userData = {
    offer: offer
  }
  
  const url = `edit_offer`
  const data = await axios.post(getConfigs('admin') + url, userData )
  return data
}