import React, { useState } from 'react'

export function Paginator({position, end}) {
    const [pos, setPosToState] = useState(position || 1);

    function setPos(pos) {
        setPosToState(pos);
    }

    function toLeft() {
        setPos(pos - 9 < 1? 1 : pos - 9)
    }

    function toRight() {
        setPos(pos + 9 > end? end : pos + 9)
    }

    return (
        <div className="paginator">
            <div className="paginator__label">Посмотреть наши предыдущие публикации:</div>
            <div className="paginator__control">
                <div onClick={toLeft} className="paginator__arrow">
                    <img src='/paginator/left.png'/>
                </div>
                <div className="paginator__numbers">
                    <Numbers position={pos} end={end} onSelect={setPos} />
                </div>
                <div onClick={toRight} className="paginator__arrow">
                    <img src='/paginator/right.png'/>
                </div>
            </div>
        </div>
    )
}

function Numbers({position, end, onSelect}) {
    let start, endPag;

    if (position > 5) {
        start = position - 4
    } else {
        start = 1
    }

    const numbers = Array.from(Array(Math.min(9, end - start)), (_, i) => (i+start));

    function getClassStyle(num) {
        return "paginator__number" + (num == position? " paginator__number_active": "")
    }

    return (
        <div className="paginator__numbers">
            {start != 1 && <div className="paginator__number">...</div>}
            {numbers.map(num => 
                <div 
                    className={getClassStyle(num)} 
                    onClick={() => onSelect(num)}
                    key={num}
                
                >
                    {num}
                </div> )}
            {start + 9 < end && <div className="paginator__number">...</div>}
            {start + 9 >= end && <div onClick={() => onSelect(end)} className={getClassStyle(end)}>{end}</div>}
        </div>
    )
}