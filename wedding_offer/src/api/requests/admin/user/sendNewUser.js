import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const sendNewUser = async (user)  => {
  
    let userData = {
        user: user
    }
    
    const url = `create_user`
    const data = await axios.post(getConfigs('admin') + url, userData )
    return data
}