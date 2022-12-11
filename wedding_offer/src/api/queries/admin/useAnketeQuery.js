import {useQuery} from "react-query";
import {getAnketeList} from "../../requests/admin/ankete/getAnketeList";

export default function useAnketeQuery(){
  return useQuery( 'anketeQuery', () => getAnketeList(), {
    placeholderData: {
      data: {
        result: undefined
      },
    }
  });
}