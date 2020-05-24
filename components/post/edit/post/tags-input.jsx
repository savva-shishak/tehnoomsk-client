import { Row, Col } from '../../../../layout/row';
import { Input } from '../../../../ui-kit/input';
import { useState } from 'react';
import { Btn } from '../../../../ui-kit/btn';
import { Tags } from './tags';

export function TagsInput ({ tags, setTags }) {
  const [tag, setTag] = useState('');

  function add () {
    if (!tag.trim()) return;
    tags.push(tag);
    setTags(tags);
    setTag('');
  }

  function deleteTag (tag) {
    tags = tags.filter(tg => tg !== tag);
    setTags(tags);
  }

  return <div><Row>
    <Col cols="9">
      <Input label="Теги" value={tag} onChange={setTag} />
    </Col>
    <Col cols="3">
      <Btn
        label="Добавить"
        onClick={add}
      />
    </Col>
    <Col cols="12">
      <Tags tags={tags} onDelete={deleteTag} />
    </Col>
  </Row>
  </div>;
}
