import { Row, Col } from '../../../layout/row';
import { BItem } from '../../../banners';

export function Item ({ onSelect, item: { id, img_src, title, anons, rubric, article_id, subtitle } }) {
  return <div>
    <Row>
      <Col cols="12">
        <BItem
          imgSrc={img_src}
          postId={article_id}
          title={title}
          subtitle={subtitle}
          anons={anons}
          rubric={rubric}
          onSelect={() => onSelect(article_id)}
        />
      </Col>
    </Row>
  </div>;
}
