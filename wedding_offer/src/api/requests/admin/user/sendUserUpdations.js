import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const sendUserUpdations = async (user) => {
  console.log('TO BACK END -> user updations')
  
  
  let userData = {
    user: user
  }
  
  const url = `update_user`
  const data = await axios.post(getConfigs('admin') + url, userData )
  return data
}