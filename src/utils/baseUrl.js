import axios from "axios";
import { getStringLocal } from "./config";
import { DOMAIN_BE, USER_LOGIN } from "./constant";

export const http = axios.create({
    baseURL: DOMAIN_BE,
    timeout: 5000
})
const token = getStringLocal(USER_LOGIN);
http.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            Token: token,
            Authorization: token
        }
    }
}, err => { console.log(err) })
