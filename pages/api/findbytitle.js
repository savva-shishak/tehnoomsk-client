import axios from 'axios';
import { domain } from './config';

export default (req, res) => {
  const { title } = req.query;

  axios.post(domain + '/content', { title })
    .then(({ data }) => {
      res.end(JSON.stringify(data));
    })
    .catch(e => {
      console.log('Ошибка при обращении к серверу: ' + e);
    });
};
