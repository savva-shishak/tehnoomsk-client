import React from 'react'
import { Layout } from "../../components/layout"
import { Post } from "../../components/banners/post"
import { BCard, BItem } from "../../components/banners"
import { getPost } from '../../api'
import { Row, Col } from '../../components/row'
import { Paginator } from "../../components/paginator";

const Page = ({post, cards, hotList}) => 
    <Layout title={post.title}>
        <Row>
            <Col cols="8">
                <Post
                    title={post.title}
                    rubric={post.rubric}
                    content={post.content}
                />
                <div className="list">
                      {hotList.map(({id, img_src, subtitle, rubric, post_id, title, anons}) => 
                          <div key={id} className="list_item">
                              <BItem 
                                  imgSrc={img_src}
                                  rubric={rubric}
                                  postId={post_id}
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
                    {cards.map(({id, title, subtitle, img_src, img_down, anons, rubric}) => 
                        <Col key={id} cols="6" md="12">
                                <BCard
                                    title={title}
                                    subtitle={subtitle}
                                    imgSrc={img_src}
                                    imgDown={img_down}
                                    anons={anons}
                                    rubric={rubric}
                                />
                        </Col>
                    )}
                </Row>
            </Col>
        </Row>
    </Layout>


Page.getInitialProps = async ({asPath}) => {
    const id = asPath.split('/')[2]
    return {...await getPost(id) }
}

export default Page