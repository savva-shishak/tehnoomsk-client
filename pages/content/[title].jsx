import Router from 'next/router';
import { getPostByTitle } from '../../api';

function Content ({ title }) {
  getPostByTitle(title).then(({ post }) => {
    Router.push(post ? '/node/' + post.id : '/');
  });

  return <div className="empty-page">
    <div className="empty-page__label">Подождите...</div>
  </div>;
}

Content.getInitialProps = async ({ query: { title } }) => {
  return { title };
};

export default Content;
