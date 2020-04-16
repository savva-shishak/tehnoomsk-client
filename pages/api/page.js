import axios from 'axios'

export default (req, res) => {
    const {page} = req.query;
    axios.get('http://localhost/banners/page.php', {
        params: {
            page
        },
        crossDomain: true
    })
    .then(({data}) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
    })
}