import axios from "axios";

export default axios.create({
    baseURL: "https://pro-api.coinmarketcap.com",
    params : {
        key: '9358a507-876b-4ea8-976c-e8ecca0d00ad',
    }
})