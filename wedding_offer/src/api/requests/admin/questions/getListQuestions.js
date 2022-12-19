import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const getQuestionsList = async () => {
  console.log('TO BACK END ->  get questions list')
  const url = `get_questions`
  const data = await axios.get(getConfigs('admin') + url)
  //console.log(data.data.result)
  return data
}