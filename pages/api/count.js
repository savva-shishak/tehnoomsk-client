import axios from 'axios'
import { domain } from "./config";

export default (_, res) => {
    axios.get(domain + '/count')
    .then(({data}) => {
        res.end(JSON.stringify(data))
    })
    .catch(e => {
        console.log("Ошибка: " + e);
    })
}