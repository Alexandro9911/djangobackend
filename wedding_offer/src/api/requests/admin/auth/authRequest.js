import axios from "axios";
import {getConfigs} from "../../../configs/configs";

export const authRequest = async (login,passw)  => {
    console.log('TO BACK END ->  auth check')
    const url = `auth?passw=${passw}&login=${login}`
    const data = await axios.get(getConfigs('admin') + url)
    return data.data
}