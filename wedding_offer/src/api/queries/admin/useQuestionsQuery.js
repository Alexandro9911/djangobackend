import {useQuery} from "react-query";
import {getQuestionsList} from "../../requests/admin/questions/getListQuestions";

export default function useQuestionsQuery(){
  return useQuery([ 'questionsQuery'], () => getQuestionsList(), {
    placeholderData: {
      data: {
        result: undefined
      },
    }
  });
}