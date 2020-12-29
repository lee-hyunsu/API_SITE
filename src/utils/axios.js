import axios from "axios";

const DOMAIN = "http://localhost:9000";
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기
export const request = (method, url, data) => { // 어디서든 import해서 사용할 수 있게 모듈화.
    return axios({
        method,
        url: DOMAIN + url,
        data,
    })
        .then((res) => res.data)
        .catch((err) => console.log(err));
}