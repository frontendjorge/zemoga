import axios from 'axios'
import { APP_JSON, BASEAUTH } from '../../config'
const baseUrlMenu = APP_JSON;
let axiosConfig = {
    headers: {
        'x-authorization': BASEAUTH
    }
};

export default function getItems(service){
    return axios.get(baseUrlMenu + service, axiosConfig)
}
