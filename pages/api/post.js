import axios from 'axios'

export default (req, res) => {
    const {id} = req.query;
    axios.get('http://localhost/post', {
        params: {
            id
        },
        crossDomain: true
    })
    .then(({data}) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
    })
}