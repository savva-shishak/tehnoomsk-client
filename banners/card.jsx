import React from 'react';
import Link from 'next/link';

export function BCard ({ rubric, title, subtitle, anons, imgSrc, imgDown, postId }) {
  return (
    <Link href="/node/[id]" as={'/node/' + (postId || 0)}>
      <a className="banner banner_card">
        <div className="banner__rubric">{limitSymbols(rubric, 15)}</div>
        {!imgDown && <div className="banner_card__img"><img src={imgSrc} /> </div> }
        <div className="banner_card__content">
          <div className="banner_card__title">{title} {subtitle && <div className="banner_card__subtitle">{subtitle}</div> } </div>
          <div className="banner_card__anons">{anons}</div>
        </div>
        {imgDown && <div className="banner_card__img"><img src={imgSrc} /> </div> }
      </a>
    </Link>
  );
}

function limitSymbols (text, limit) {
  if (text.length <= limit) {
    return text;
  }

  return text.slice(0, limit - 3) + '...';
}
