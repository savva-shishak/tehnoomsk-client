import { Component } from 'react';
import { BPost } from '../../../../banners';
import { InputsFromPost } from './Inputs';
import { Row, Col } from '../../../../layout/row';
import axios from 'axios';
import { Btn } from '../../../../ui-kit/btn';
import { EditBanner } from '../banner';

export class EditPost extends Component {
  constructor (props) {
    super(props);

    this.state = this.getEmptyState();

    if (this.props.id) {
      this.getPostFromServer();
    }
  }

  render () {
    if (+this.props.id !== +this.state.post.id) {
      this.getPostFromServer();
    }
    return <Row>
      <Col cols="12">
        <div className="h3">Баннер</div>
        <EditBanner
          {...this.state.banner}
          rubric={this.state.post.rubric}
          onChange={newBannerState =>
            this.setState({
              banner: { ...this.state.banner, ...newBannerState }
            })}
        />
        <hr />
      </Col>
      <Col cols="8">
        <div className="h3">Пост</div>
        <div style={{ maxHeight: 800, overflowY: 'auto' }} className="max-scroll-y">
          <BPost {...this.state.post} noActive />
        </div>
      </Col>
      <Col cols="4">
        <InputsFromPost
          post={this.state.post}
          setPost={post => this.setState({ post: { ...this.state.post, ...post } })}/>
        <Btn
          label="Сохранить"
          onClick={this.save.bind(this)}
          maxWidth
        />
        <Btn
          label="Очистить панель"
          onClick={this.cancel.bind(this)}
          maxWidth
        />
        <Btn
          label="Удалить пост"
          onClick={this.delete.bind(this)}
          maxWidth
        />
      </Col>
    </Row>;
  }

  getPostFromServer () {
    axios.get('/api/admin/post/' + this.props.id)
      .then(({ data }) => {
        this.setState(data);
      });

    axios.get('/api/admin/get-banner?post_id=' + this.props.id)
      .then(({ data }) => {
        this.setState({ banner: data });
      });
  }

  cancel () {
    this.setState({ post: this.getEmptyPost(), banner: this.getEmptyBanner() });
    this.props.onCancel();
  }

  save () {
    this.props.onSave(this.state);
  }

  delete () {
    this.props.onDelete();
  }

  getEmptyState () {
    return { post: this.getEmptyPost(this.props.id), banner: this.getEmptyBanner() };
  }

  getEmptyPost (id = null) {
    return { id, title: '', tags: '', content: '', rubric_id: 1, rubric: '' };
  }

  getEmptyBanner (id = null) {
    return { id, img_src: '', title: '', anons: '', rubric: '', post_id: 0 };
  }
}
