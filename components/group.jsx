import { BCard } from '../components/banners';
import { Row, Col } from "../components/row";
import { HotList } from '../components/hot-list';

export function GroupBaners({hotList, cards}) {
    return (
        <Row>
            <Col lg="8" md="12">
                <HotList banners={hotList}  />
            </Col>
            <Col lg="4" md="12">
                <Row>
                    {cards.map(card => 
                        <Col key={card.id} md="6" lg="12" cols="12">
                            <BCard
                                rubric={card.rubric}
                                imgSrc={card.img_src}
                                title={card.title}
                                subtitle={card.subtitle}
                                anons={card.anons}
                            />
                        </Col>
                    )}
                </Row>
            </Col>
        </Row>
    )
}