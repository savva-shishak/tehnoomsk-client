import axios from 'axios';
import { correctPost, correctPage } from '../utils/hrefs';
import { valueAtMode } from '../utils/prod-dev';

export const hostname = 'http://localhost:3000'; // valueAtMode({ dev: 'http://localhost:3000', prod: 'https://www.tehnoomsk.ru' });

export const getPageData = async (params) => {
  const { data: { items, count } } = await axios.get(hostname + '/api/page', { params });

  const responseData = {
    hotList: items.slice(0, 18),
    cards: items.slice(18, 24),
    carousel: items.slice(24, 30),
    count
  };

  correctPage(responseData);

  return responseData;
};

export const getPost = async (id) => {
  const { data } = await axios.get(hostname + '/api/post', { params: { id } });

  correctPost(data);

  return data;
};

export async function getRubrics () {
  const { data } = await axios.get(hostname + '/api/rubrics');

  return data;
}

export async function getPostByTitle (title) {
  const { data } = await axios.get(hostname + '/api/findbytitle', { params: { title } });

  return data;
}
