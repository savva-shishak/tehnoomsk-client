import { Row, Col } from "../row";
import { Carousel } from "../carousel";

export function Mobile({props: {carousel, rubrics, hotList, cards}}) {
    const groups = []


    return (
        <Row>
            <Col cols="12">
                {carousel && <Carousel slides={carousel} />}
            </Col>
        </Row>
    )
}
