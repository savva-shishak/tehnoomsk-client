import React, { useRef, useEffect } from 'react';
import { Link } from '../utils/Link';

export function Post ({ content, created, rubric, title, tags, noActive }) {
  tags = tags ? tags.split(';') : [];

  content = content.findAndCorrectImgSrc();

  const body = useRef(null);

  useEffect(() => {
    body.current.innerHTML = content;
  });

  return (
    <div className="banner banner_post">
      <div className="banner__rubric">{rubric}</div>
      <div className="banner_post__content">
        <div className="banner_post__title">{title}</div>
        <div className="banner_post__created">{created}</div>
        <div ref={body} className="banner_post__body"></div>
      </div>
      <div className="banner_post__tags-title">Тэги:</div>
      <div className="banner_post__tags">
        {tags.map(tag => {
          return !noActive
            ? <Link key={tag} tag={tag}>
              <div className="banner_post__tag">{tag}</div>
            </Link>
            : <div key={tag} className="banner_post__tag">{tag}</div>;
        })}
      </div>
    </div>
  );
}
