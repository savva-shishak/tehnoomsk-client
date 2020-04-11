import React from 'react'
import { Layout } from "../../components/layout"
import { Post } from "../../components/banners/post"
import { getAllRubrics } from "../../api/rubrics"
import { getPost } from '../../api/post'
import { Row, Col } from '../../components/row'

const Page = ({rubrics, post}) => {

    return (
        <Layout rubrics={rubrics} title={post.title}>
            <Row>
                <Col cols="8">
                    <Post
                        title={post.title}
                        rubricName={post.rubric_name}
                        content={post.content}
                    />
                </Col>
                <Col cols="4"></Col>
            </Row>
        </Layout>
    )
}

Page.getInitialProps = async function() {
    return {rubrics: await getAllRubrics(), post: await getPost(1) }
}

export default Page