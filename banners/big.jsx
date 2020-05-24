import React from 'react';
import Link from 'next/link';

export function BBig ({ rubric, imgSrc, anons, postId }) {
  return (
    <Link href="/node/[id]" as={'/node/' + (postId || 0)}>
      <a className="banner banner_big">
        <div className="banner__rubric">{rubric}</div>
        <div className="banner_big__img">
          <img src={imgSrc}/>
        </div>
        <div className="banner_big__anons">{anons}</div>
      </a>
    </Link>
  );
}
