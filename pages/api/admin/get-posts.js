import axios from 'axios';
import { domain } from '../config';

export default (req, res) => {
  const params = req.query;

  axios
    .get(domain + '/admin/posts', { params }).then(({ data }) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    })
    .catch(e => console.log('Ошибка при получении даннх с сервера: ' + e));
};
