import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Layout } from '../components/layout';
import { Paginator } from "../components/paginator"
import { BCard, BItem } from '../components/banners';
import { Row, Col } from "../components/row";
import { Carousel } from '../components/carousel';
import { getPageData } from '../api';
import { GoogleAdSense } from '../components/layout/metrics';

function IndexPage({carousel, hotList, cards}) {
  
  const router = useRouter()

  const codeWorld = "я-админ"
  let inputSymbols = ''

  useEffect(() => {
    document.onkeydown = e => {
      inputSymbols += e.key.toLowerCase()

      if (inputSymbols.includes(codeWorld)) {
        router.push("/admin")
      }
    }
  })

  return (
    <Layout title="Техносфера Россия">
      <Row>
        <Col md="8">
            <Row>
              <Col cols="12">
                  {(!!carousel && carousel.length) != 0 && <Carousel slides={carousel}/>}
                  <div className="list">
                      {hotList.map(({id, img_src, subtitle, rubric, article_id, title, anons}) => 
                          <div key={id} className="list_item">
                              <BItem 
                                  imgSrc={img_src}
                                  rubric={rubric}
                                  postId={article_id}
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
        <Col md="4">
          <Row>
              {cards.map(({id, title, subtitle, img_src, article_id, img_down, anons, rubric}) => 
                  <Col key={id} cols="6" md="12">
                      <BCard
                          title={title}
                          subtitle={subtitle}
                          imgSrc={img_src}
                          imgDown={img_down}
                          anons={anons}
                          rubric={rubric}
                          postId={article_id}
                      />
                  </Col>
              )}
              <GoogleAdSense />
          </Row>
        </Col>
          <style jsx>{`
              .list_item {
                  padding: 5px 0;
              }
          `}</style>
      </Row>
      <Paginator rubric={"Разное"} />
    </Layout>
  )
}

IndexPage.getInitialProps = async ({query: {page, rubric, tag}}) => {
  return {
    ...await getPageData(page || 1, rubric, tag)
  }
}

export default IndexPage;
