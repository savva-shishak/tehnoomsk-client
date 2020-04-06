import React from 'react'
import { Layout } from "../components/layout";
import { BCard, BMini } from '../components/banners';
import { Row, Col } from "../components/row";
import { Carousel } from '../components/carousel';

const IndexPage = () => {
  
  return (
    <Layout title="Главная страница">
      <Row>
        <Col lg="8" sm="12">
          <Carousel/>
        </Col>
        <Col lg="4" md="12">
          <Row>
            <Col lg="12" md="6" sm="12">
              <BMini />
              <BMini />
            </Col>
            <Col lg="12" md="6" sm="12">
              <BCard
                rubric="Блоги"
                imgSrc="https://sun9-65.userapi.com/c851132/v851132277/dffcf/hf6kjMO_oto.jpg"
                imgDown={true}
                title="Евгений Белкин"
                subtitle="главный редактор"
                anons="Кто и что мешает России перейти к экономике технологического уклада? Вопросы и ответы"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage;
