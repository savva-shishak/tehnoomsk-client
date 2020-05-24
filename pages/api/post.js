import axios from 'axios';
import { domain } from './config';

export default (req, res) => {
  const { id } = req.query;
  axios.get(domain + '/post', { params: { id } })
    .then(response => {
      const { data } = response;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      const responseData = {
        post: { ...data.post, rubric: data.rubric },
        hotList: data.widgets.slice(0, 5),
        cards: data.widgets.slice(0, 3)
      };

      res.end(JSON.stringify(responseData));
    });
};
