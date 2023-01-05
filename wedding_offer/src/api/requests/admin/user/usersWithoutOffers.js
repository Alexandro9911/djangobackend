import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const getUsersWithoutOfferRequest = async ()  => {
  console.log('TO BACK END ->  get users without offer')
  const url = `users_without_offer`
  const data = await axios.get(getConfigs('admin') + url)
  return data
}