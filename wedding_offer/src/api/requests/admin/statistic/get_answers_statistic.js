import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const getStatisticRequest = async ()  => {
  console.log('TO BACK END ->  get statistic')
  const url = `get_statistic`
  const data = await axios.get(getConfigs('admin') + url)
  return data
}