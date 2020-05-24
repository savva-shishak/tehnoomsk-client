import { Input, TextArea } from '../../../../ui-kit/input';
import { LoadImage } from './loadImage';

export function Inputs (data) {
  let { img_src, title, anons, onChange } = data;

  img_src = img_src.findAndCorrectImgSrc();

  return <div>
    <div className="pb-3">
      <Input label="Заголовок" value={title} onChange={title => onChange({ title })} />
    </div>
    <div className="pb-3">
      <TextArea rows="7" label="Анонс" value={anons} onChange={anons => onChange({ anons })} />
    </div>
    <div className="pb-3">
      <LoadImage img_src={img_src} onChange={img_src => onChange({ img_src })} />
    </div>
  </div>;
}
