import Axios from 'axios';
import { domain } from '../config';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

export default (req, res) => {
  const { body } = req;

  Axios.post(domain + '/load-base64', body)
    .then(({ data }) => {
      res.json(domain + '/' + data);
    })
    .catch(({ response: { data } }) => {
      console.log('Ошибка при отправки файла на сервер: ', data);
    });
};
