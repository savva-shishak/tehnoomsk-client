import axios from 'axios';
import { expressJson } from '../../../../utils/json-response';
import { domain } from '../../config';

export default function (req, res) {
  const id = req.url.split('/')[4];
  axios.get(domain + '/admin/post/' + id)
    .then(({ data }) => {
      expressJson(res, data);
    });
}
