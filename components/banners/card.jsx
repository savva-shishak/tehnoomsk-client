import React from 'react';

export function BCard({rubric, title, subtitle, anons, imgSrc, imgDown }) {
    return (
        <a href="#" className="banner banner_card">
            <div className="banner__rubric">{rubric}</div>
            {!imgDown && <div className="banner_card__img"><img src={imgSrc} /> </div> }
            <div className="banner_card__content">
                <div className="banner_card__title">{title} {subtitle && <div className="banner_card__subtitle">{subtitle}</div> } </div>
                <div className="banner_card__anons">{anons}</div>
            </div>
            {imgDown && <div className="banner_card__img"><img src={imgSrc} /> </div> }
        </a>
    )
}