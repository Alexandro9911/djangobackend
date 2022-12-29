import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const updateAnkete = async (ankete) => {
  console.log('TO BACK END ->  update ankete')
  const url = `update_ankete`
  
  let userData = {
    ankete: ankete
  }
  
  const data = await axios.post(getConfigs('admin') + url, userData )
  return data
}