import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const getAnketeList = async () => {
  console.log('TO BACK END ->  get ankete list')
  const url = `ankete_list`
  const data = await axios.get(getConfigs('admin') + url)
  //console.log(data.data.result)
  return data
}