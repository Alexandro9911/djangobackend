import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const getUsersRequest = async ()  => {
  console.log('TO BACK END ->  get users list')
  const url = `get_users_list`
  const data = await axios.get(getConfigs('admin') + url)
  console.log(data.data.result)
  return data
}