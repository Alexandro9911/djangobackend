import axios from "axios";
import {getConfigs} from "../../configs/configs";

export const getUserInfo = async (token)  => {
  console.log('TO BACK END ->  get users info')
  const url = `get_info?token=${token}`
  const data = await axios.get(getConfigs('offer') + url)
  console.log(data.data.result)
  return data
}