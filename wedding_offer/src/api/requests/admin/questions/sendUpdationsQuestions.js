import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const sendUpdationsQuestions = async (question) => {
  console.log('TO BACK-END => action - save updations question', question)
  
  let userData = {
    question: {
      id: question.id,
      active: question.active,
      name: question.name,
      multiple: question.multiple,
      question_text: question.title,
      identifier: question.identifier,
      answer_variants: JSON.stringify(question.answers)
    }
  }
  
  const url = `update_question`
  const data = await axios.post(getConfigs('admin') + url, userData )
  return data
}