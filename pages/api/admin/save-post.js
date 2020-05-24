import axios from 'axios';
import { domain } from '../config';

export default function (req, res) {
  axios
    .post(domain + '/admin/save', req.body)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(({ response: { data } }) => {
      console.log('Ошибка при отправки файла на сервер: ', data);
    });
}
