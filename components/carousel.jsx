import React, { useState, useEffect } from 'react';
import { BBig } from './banners';

export function Carousel({activeId, slides}) {
    const [activeSlideId, setActive] = useState(activeId || 0);

    function toLeft() {
        const newId = activeSlideId == 0? slides.length - 1 : activeSlideId - 1;
        setActive(newId);
    }

    function toRight() {
        const newId = activeSlideId == slides.length - 1? 0 : activeSlideId + 1; 
        setActive(newId);
    }

    return (
        <div className="carousel">
            <div onClick={toLeft} className="carousel__arrow carousel__arrow_left">
                <div className="arrow">
                    <img src="/carousel/strelka.png" alt=""/>
                </div>
            </div>
            <div className="carousel__body">
                <div className="carousel__slides">
                    {slides.length != 0 && <CSlide banner={slides[activeSlideId]}/>}
                </div>
            </div>
            <div onClick={toRight} className="carousel__arrow carousel__arrow_right">
                <div className="arrow">
                    <img src="/carousel/strelka-prav.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

function CSlide({banner}) {
    return (
        <div className="carousel__slide">
            <BBig 
                rubric={banner.rubric}
                imgSrc={banner.img_src}
                anons={banner.anons}
            />
        </div>
    )
}