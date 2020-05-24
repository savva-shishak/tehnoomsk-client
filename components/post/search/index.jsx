import { Row, Col } from '../../../layout/row';
import { Items } from './select-banners';
import { SearchInputs } from './Input';
import React, { Component } from 'react';
import { Paginator } from '../../../components/paginator';
import axios from 'axios';

export class SearchPostByBanner extends Component {
  constructor (props) {
    super(props);

    this.state = { title: '', rubric: '', tag: '', page: 1, count: 0, pages: 1, items: [] };

    this.sendRequest();

    this.itemsHtnlBlock = React.createRef();
  }

  setPage (page) {
    this.setState({ page });
    this.sendRequestAsync();
    this.itemsHtnlBlock.current.scrollTo(0, 0);
  }

  setSearchParams (values) {
    this.setState({ ...values, page: 1 });
    this.sendRequestAsync();
  }

  sendRequest () {
    axios.get(this.getUrl())
      .then(({ data: { count, items } }) => {
        this.setState({ pages: (count / 30 ^ 0) + 1, count, items });
      });
  }

  sendRequestAsync () {
    setTimeout(() => {
      this.sendRequest();
    }, 0);
  }

  getUrl () {
    const params = [];
    const { title, rubric, tag, page } = this.state;

    for (const key in { title, rubric, tag, page }) {
      params.push(key + '=' + this.state[key]);
    }

    return '/api/admin/get-posts?' + params.join('&');
  }

  render () {
    return (
      <Row>
        <Col cols="12">
          <div className="h4 text-center">Поиск поста по баннеру</div>
          <br />
          <CountBanners count={this.state.count} />
        </Col>
        <Col cols="8">
          <Paginator
            lessLabel={true}
            pos={this.state.page}
            end={this.state.pages}
            onSelect={this.setPage.bind(this)}
          />
          <div ref={this.itemsHtnlBlock} className="max-scroll-y">
            <Items
              items={(this.state.items || [])}
              onSelect={this.props.onSelect}
            />
          </div>
        </Col>
        <Col cols="4">
          <SearchInputs values={this.state} setValues={this.setSearchParams.bind(this)} />
        </Col>
      </Row>
    );
  }
}

function CountBanners ({ count }) {
  return <div className="h5">Показано {Math.min(30, count)} из {count}</div>;
}
