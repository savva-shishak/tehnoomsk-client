import React from 'react'
import { Layout } from "../../components/layout"
import { withRouter } from "next/router";

function Page({ router }) {

    return (
        <Layout>
            Test {router.query.id}
        </Layout>
    )
}

export default withRouter(Page)