import React from 'react'
import { Layout } from "../components/layout";
import { BCard, BMini } from '../components/banners';
import { Row, Col } from "../components/row";
import { Carousel } from '../components/carousel';
import { HotList } from '../components/hot-list';

const IndexPage = () => {
  
  return (
    <Layout title="Главная страница">
      <Row>
        <Col lg="8" md="12">
          <Row>
            <Col cols="12">
              <Carousel/>
            </Col>
            <Col cols="12">
              <HotList startIndex="0" numItems="2" />
            </Col>
          </Row>
        </Col>
        <Col lg="4" md="12">
          <Row reverse="md">
            <Col md="6" lg="12" cols="12">
              <BMini />
              <BMini />
            </Col>
            <Col md="6" lg="12" cols="12">
              <BCard
                rubric="Блоги"
                imgSrc="https://sun9-65.userapi.com/c851132/v851132277/dffcf/hf6kjMO_oto.jpg"
                title="Евгений Белкин"
                subtitle="главный редактор"
                anons="Кто и что мешает России перейти к экономике технологического уклада? Вопросы и ответы"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg="8" md="12">
          <HotList startIndex="3" numItems="2" />
        </Col>
        <Col lg="4" md="12">
          <Row>
            <Col md="6" lg="12" cols="12">
              <BCard
                rubric="Блоги"
                imgSrc="https://sun9-65.userapi.com/c851132/v851132277/dffcf/hf6kjMO_oto.jpg"
                title="Евгений Белкин"
                subtitle="главный редактор"
                anons="Кто и что мешает России перейти к экономике технологического уклада? Вопросы и ответы"
              />
            </Col>
            <Col md="6" lg="12" cols="12">
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
