import axios from 'axios';
import { domain } from '../config';
import { expressJson } from '../../../utils/json-response';

export default (req, res) => {
  const { post_id } = req.query;

  axios
    .get(domain + '/admin/banner/' + post_id).then(({ data: { banners } }) => {
      expressJson(res, banners[0]);
    })
    .catch(e => console.log('Ошибка при получении даннх с сервера: ' + e));
};
