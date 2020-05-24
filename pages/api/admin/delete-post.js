import axios from 'axios';
import { domain } from '../config';

export default function (req, res) {
  console.log(req.query.id);

  axios
    .get(domain + '/admin/delete/' + req.query.id)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(({ response: { data } }) => {
      console.log('Ошибка при отправки файла на сервер: ', data);
    });
}
