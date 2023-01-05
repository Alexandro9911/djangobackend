import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const getOffersList = async () => {
  console.log('TO BACK END ->  get offers list')
  const url = `offers_list`
  const data = await axios.get(getConfigs('admin') + url)
  //console.log(data.data.result)
  return data
}