import axios from 'axios'
import {domain} from "./config"

export default (req, res) => {
    const {id} = req.query;
    axios.get(domain + '/post', {
        params: {
            id
        },
        crossDomain: true
    })
    .then(response => {
        const {data} = response
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data) )
    })
}