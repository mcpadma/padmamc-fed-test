import axios from 'axios';

const urls = axios.create({
    baseURL: "https://randomuser.me/api/"
});

export default urls;