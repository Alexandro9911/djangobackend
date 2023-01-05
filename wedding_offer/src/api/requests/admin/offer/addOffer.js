import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const addOfferRequest = async (offer)  => {
  
  let userData = {
    offer: offer
  }
  
  const url = `add_offer`
  const data = await axios.post(getConfigs('admin') + url, userData )
  return data
}