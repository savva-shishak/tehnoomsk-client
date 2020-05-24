import axios from 'axios';
import { domain } from './config';

export default (_, res) => {
  axios.get(domain + '/rubrics')
    .then(({ data }) => {
      res.end(JSON.stringify(data));
    });
};
