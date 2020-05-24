import axios from 'axios';

export async function loadImageByBase64Code (title, code) {
  return await axios.post('/api/admin/load-image', { title, base64_image: code }).then(({ data }) => data);
}
