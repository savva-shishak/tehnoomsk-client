import React from 'react'
import Link from 'next/link'

export function BItem({imgSrc, title, anons, rubric, postId, subtitle}) {
    console.log(rubric);
    
    return (
        <Link href="/node/[id]" as={'/node/' + postId}>
            <div className="banner banner_item">
                <div className="banner_item__img">
                    <img src={imgSrc} alt=""/>
                </div>
                <div className="banner_item__body">
                    <div className="banner__rubric">{rubric}</div>
                    <div className="banner_item__title">{title} {subtitle && <div className="banner_item__subtitle">{subtitle}</div> }</div>
                    <div className="banner_item__anons">{anons}</div>
                </div>
            </div>
        </Link>
    )
}
