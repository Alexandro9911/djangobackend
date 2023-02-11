import {useQuery} from "react-query";
import {getStatisticRequest} from "../../requests/admin/statistic/get_answers_statistic";

export default function useStatisticQuery(){
  return useQuery([ 'statisticQuery'], () => getStatisticRequest(), {
    placeholderData: {
      data: {
        result: undefined
      },
    }
  });
}