import axios from 'axios'
import { domain } from './config';

export default (req, res) => {
    const {page, rubric, tag} = req.query;
    axios.get(domain + '/page', {params: {rubric, page, tag}})
    .then(({data}) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')

        const responseData = {
            hotList: data.slice(0, 18),
            cards: data.slice(18, 24),
            carousel: data.slice(24, 30),
        }

        res.end(JSON.stringify(responseData))
    })
    .catch(e => {
        console.log("Ошибка: " + e);
    })
}