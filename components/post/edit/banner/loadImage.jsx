import { Input } from '../../../../ui-kit/input';
import Files from 'react-files';
import { useState } from 'react';
import { Btn } from '../../../../ui-kit/btn';
import { loadImageByBase64Code } from '../../../../utils/load-image';

export function LoadImage ({ img_src, onChange }) {
  const [state, setAllState] = useState({ isLoading: false });

  function setState (newState) {
    setAllState({ ...state, ...newState });
  }

  async function loadImg (files) {
    if (!files.length) {
      return;
    }

    setState({ isLoading: true });
    const file = files.getLast();
    const title = file.name;
    const base64 = await toBase64(file);

    const url = await loadImageByBase64Code(title, base64);

    onChange(url);
    setState({ isLoading: false });
  }

  return <>
    <Input label="URL картинки" value={img_src} onChange={onChange} />
    <Files
      onChange={loadImg}
      accepts={['image/*']}
    >
      <Btn label={state.isLoading ? 'Загружаю...' : 'Загрузить картинку'} maxWidth />
    </Files>
  </>;
}

Array.prototype.getLast = function () {
  return this[this.length - 1];
};

function toBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
