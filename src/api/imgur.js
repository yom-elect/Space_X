import qs from 'qs';
import axios from "axios";

const CLIENT_ID = "67300f2bc3b4de8";
const ROOT_URL = "https://api.imgur.com"
    // const accessToken = window.localStorage.getItem("imgur_token")

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: "token"
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    },

    fetchImages(accessToken) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    },

    uploadImages(images, accessToken) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData()
            formData.append("image", image)
            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        });
        return Promise.all(promises);
    }


}