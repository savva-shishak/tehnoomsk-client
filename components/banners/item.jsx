import React from 'react'

export function BItem({imgSrc, rubric, }) {
    return (
        <div className="banner banner_item">
            <div className="banner_item__img">
                <img src={imgSrc} alt=""/>
            </div>
            <div className="banner_item__body">
                <div className="banner_rubric">{rubric} </div>
            </div>
        </div>
    )
}