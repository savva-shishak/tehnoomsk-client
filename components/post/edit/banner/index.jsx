import { BItem } from '../../../../banners';
import { Row, Col } from '../../../../layout/row';
import { Inputs } from './Inputs';

export function EditBanner (props) {
  return <Row>
    <Col cols="8">
      <BItem {...props} onSelect={() => {}} />
    </Col>
    <Col cols="4">
      <Inputs {...props} />
    </Col>
  </Row>;
}
