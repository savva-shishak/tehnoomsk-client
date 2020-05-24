import { Select } from '../ui-kit/select';
import { useState } from 'react';
import { getRubrics } from '../api';

export function RubricsSelect ({ rubric_id, onChange, withAll }) {
  const [rubrics, setRubrics] = useState(null);

  async function loadRubrics () {
    const rubrics = await getRubrics();

    if (withAll) {
      rubrics.unshift({ name: 'Все', id: 0 });
    }

    setRubrics(rubrics);
    setUp(rubric_id, rubrics);
  }

  if (rubrics == null) {
    loadRubrics();
  }

  function setUp (rubric_id, rubricsList = rubrics) {
    let { name } = rubricsList.filter(({ id }) => +rubric_id === +id)[0];

    if (name === 'Все') {
      name = '';
    }

    onChange({
      rubric_id,
      rubric: name
    });
  }

  const options = (rubrics || []).map(({ id, name }) => { return { value: id, label: name }; });

  return <Select
    label="Рубрика"
    value={rubric_id}
    options={options}
    onChange={setUp}
  />;
}
