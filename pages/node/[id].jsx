import React from 'react'
import { Layout } from "../../components/layout"
import { Post } from "../../components/banners/post"
import { BCard, BItem } from "../../components/banners"
import { getPost } from '../../api'
import { Row, Col } from '../../components/row'
import { Socials } from "../../components/socials";
import { GoogleAdSense } from '../../components/layout/metrics'
import Link from 'next/link'

const Page = ({post, cards, hotList}) => {
    return <Layout title={post.title}>
        <Row>
            <Col cols="8">
                <Link href="/">На главную</Link>
                <Post
                    title={post.title}
                    rubric={post.rubric}
                    content={post.content}
                />
                <div className="share">
                    <div className="share__text">Поделитесь публикацией</div>
                    <div className="share__socials"><Socials /></div>
                </div>
                <div className="list">
                      {hotList.filter(item => !!item.img_src).map(({id, img_src, subtitle, rubric, article_id, title, anons}) => 
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
            <Col cols="4">
                <Row>
                    {cards.filter(item => !!item.img_src).map(({id, title, article_id, subtitle, img_src, img_down, anons, rubric}) => 
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
        </Row>
    </Layout>
}

Page.getInitialProps = async ({asPath}) => {
    const id = asPath.split('/')[2]
    const data = await getPost(id)
    return {...data }
}

export default Page