import Files from 'react-files';
import { Btn } from '../../../../ui-kit/btn';
import mammoth from 'mammoth';
import { useState } from 'react';
import { loadImageByBase64Code } from '../../../../utils/load-image';

export function LoadContentBtn ({ onLoad }) {
  const [isLoad, setIsLoad] = useState(false);

  function toLoad (files) {
    var reader = new FileReader();

    reader.onloadend = function () {
      setIsLoad(true);
      var arrayBuffer = reader.result;

      mammoth.convertToHtml({ arrayBuffer: arrayBuffer }).then(async function ({ value }) {
        value = await loadBase64FromSrc(value);
        onLoad(value.findAndCorrectImgSrc());
        setIsLoad(false);
      });
    };

    reader.readAsArrayBuffer(files.pop());
  }

  return <div>
    <Files
      onChange={toLoad}
      accepts={['.docx', '.doc']}
    >
      <Btn
        label={isLoad ? 'Загружаю' : 'Загрузить word файл с содержимым'}
      />
    </Files>
  </div>;
}

async function loadBase64FromSrc (content) {
  while (content.includes('src="data')) {
    const { code } = content.betweenFromTo('src="', '" ');

    const url = await loadImageByBase64Code('word-content', code);
    content = content.replace(code, url);
  }

  return content;
}

String.prototype.betweenFromTo = function (start, end) {
  const startIndex = this.indexOf(start) + start.length;
  const endIndex = this.indexOf(end, startIndex + 1);

  return {
    code: this.substring(startIndex, endIndex)
  };
};
