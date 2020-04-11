import { Layout } from "../layout";
import { BCard, BMini, BItem } from '../banners';
import { Row, Col } from "../row";
import { Carousel } from '../carousel';
import { Paginator } from "../paginator";

export function Desktop({props: {carousel, rubrics, hotList, cards}}) {
    return (
        <Row>
          <Col lg="8">
              <Row>
                <Col cols="12">
                    <Carousel slides={carousel}/>
                    <div className="list">
                        {hotList.map(({id, img_src, subtitle, rubric_name, post_id, title, anons}) => 
                            <div key={id} className="list_item">
                                <BItem 
                                    imgSrc={img_src}
                                    rubric={rubric_name}
                                    postId={post_id}
                                    title={title}
                                    anons={anons}
                                    subtitle={subtitle}
                                />
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
          </Col>
          <Col lg="4">
            <Row>
                {cards.map(({id, title, subtitle, img_src, img_down, anons, rubric_name}) => 
                    <Col key={id} cols="6" md="12">
                        <BCard
                            title={title}
                            subtitle={subtitle}
                            imgSrc={img_src}
                            imgDown={img_down}
                            anons={anons}
                            rubric={rubric_name}
                        />
                    </Col>
                )}
            </Row>
          </Col>
            <style jsx>{`
                .list_item {
                    padding: 5px 0;
                }
            `}</style>
        </Row>
    )
}