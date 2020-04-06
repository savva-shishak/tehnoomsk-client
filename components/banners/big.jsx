import React from 'react'

export function BBig({rubric, imgSrc, anons}) {
    return (
        <a href="#" className="banner banner_big">
            <div className="banner__rubric">{rubric}</div>
            <div className="banner_big__img">
                <img src={imgSrc}/>
            </div>
            <div className="banner_big__anons">{anons}</div>
        </a>
    )
}