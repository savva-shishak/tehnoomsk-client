import React from 'react';
import Link from 'next/link';

export function BItem ({ imgSrc, img_src, title, anons, rubric, postId, post_id, article_id, subtitle, onSelect }) {
  imgSrc = imgSrc || img_src || '';
  postId = postId || post_id || article_id;
  imgSrc = imgSrc.findAndCorrectImgSrc();

  const banner = <div className="banner banner_item">
    <div className="banner_item__img">
      <img src={imgSrc} alt=""/>
    </div>
    <div className="banner_item__body">
      <div className="banner__rubric">{rubric}</div>
      <div className="banner_item__title">{title} {subtitle && <div className="banner_item__subtitle">{subtitle}</div> }</div>
      <div className="banner_item__anons">{anons}</div>
    </div>
  </div>;

  if (!onSelect) {
    return <Link href="/node/[id]" as={'/node/' + postId}>
      {banner}
    </Link>;
  } else {
    return <div onClick={onSelect}>
      {banner}
    </div>;
  }
}
