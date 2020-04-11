import React, { Component } from 'react'

import { withRouter } from "next/router"
import { getSlides } from "../api/carousel"
import { getAllRubrics } from '../api/rubrics';
import { getHotList } from '../api/hot-list';
import { Desktop } from '../components/index-views/desktop';
import { Mobile } from '../components/index-views/mobile';
import { Layout } from '../components/layout';
import { Paginator } from "../components/paginator"

class IndexPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      width: 10000
    }
  }

  static async getInitialProps () {
    return {
      carousel: await getSlides(),
      rubrics: await getAllRubrics(), 
      hotList: await getHotList(),
      cards: (await getHotList()).slice(0, 3)
    }
  }

  componentDidMount() {
    console.log(window);
    this.setState({width: document.body.offsetWidth})
  }

  render () {
    const { width } = this.state

    console.log(width);
    

    return (
      <Layout rubrics={this.props.rubrics} >
        <Desktop props={this.props} />
        <Paginator position={1} end={12} />
      </Layout>
    )
  }
}

IndexPage.componentDidMount = function () {
  console.log(window);
}

export default withRouter(IndexPage);
