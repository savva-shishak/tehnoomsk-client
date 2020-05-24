import { Row, Col } from '../../../layout/row';
import { Input } from '../../../ui-kit/input';
import { RubricsSelect } from '../../rubrics';
import { useState } from 'react';

export function SearchInputs ({ values: { title, tag, rubric }, setValues }) {
  const [rubricIdState, setRubricIdState] = useState(0);
  function setTitle (value) {
    setValues({
      title: value, tag, rubric
    });
  }

  function setTag (value) {
    setValues({
      title, tag: value, rubric
    });
  }

  function setRubric ({ rubric, rubric_id }) {
    setValues({
      title, tag, rubric
    });

    setRubricIdState(rubric_id);
  }

  return <Row>
    <Col cols="12">
      <Input value={title} onChange={setTitle} label="Заголовок" />
    </Col>
    <Col cols="12">
      <Input value={tag} onChange={setTag} label="Тег" />
    </Col>
    <Col cols="12">
      <RubricsSelect rubric_id={rubricIdState} onChange={setRubric} withAll />
    </Col>
  </Row>;
}
