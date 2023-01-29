import axios from "axios";
import {getConfigs} from "../../configs/configs";

export const sendAnswersRequest = async (answers)  => {
  console.log('TO BACK END ->  set user answers')
  const url = `set_answers`
  
  let userData = {
    answers: answers
  }
  
  const data = await axios.post(getConfigs('offer') + url, userData )
  return data
}