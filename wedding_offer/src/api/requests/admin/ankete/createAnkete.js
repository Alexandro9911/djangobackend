import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const createAnkete = async (ankete) => {
  console.log('TO BACK END ->  create ankete')
  const url = `create_ankete`
  
  let userData = {
    ankete: ankete
  }
  
  const data = await axios.post(getConfigs('admin') + url, userData )
  return data
}