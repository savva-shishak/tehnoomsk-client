import axios from 'axios'
import { domain } from './config';

export default (req, res) => {
    const {page} = req.query;
    axios.get(domain + '/banners/page.php', {
        params: {
            page
        }
    })
    .then(({data}) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
    })
    .catch(e => {
        console.log("Ошибка: " + e);
    })
}