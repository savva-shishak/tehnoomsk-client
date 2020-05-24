import { Input } from '../../../../ui-kit/input';
import { RubricsSelect } from '../../../rubrics';
import { TagsInput } from './tags-input';
import { Row, Col } from '../../../../layout/row';
import { LoadContentBtn } from './loadContent';

export function InputsFromPost ({ post, setPost }) {
  return <Row>
    <Col cols="12">
      <Input label="Заголовок" value={post.title} onChange={title => setPost({ title })}/>
    </Col>
    <Col cols="12">
      <LoadContentBtn
        onLoad={content => setPost({ content })}
      />
    </Col>
    <Col cols="12">
      <RubricsSelect {...post} onChange={rubricData => setPost({ ...rubricData })} />
    </Col>
    <Col cols="12">
      <TagsInput
        tags={post.tags.split(';').filter(tag => tag)}
        setTags={newTags => setPost({ tags: newTags.join(';') })}
      />
    </Col>
  </Row>;
}
