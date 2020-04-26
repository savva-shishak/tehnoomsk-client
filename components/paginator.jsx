import React, { useState } from 'react'
import {Link} from './Link'
import { useRouter } from 'next/router'
import { getEnd } from '../api' 

let endStore;

export function Paginator({rubric}) {
    let end = 10000
    
    const { query: {page} } = useRouter()

    const position = page || 1

    if (!endStore) {
        getEnd().then(e => {
            endStore = e
            end = e
        })
    } else {
        end = endStore
    }

    return (
        <div className="paginator">
            <div className="paginator__label">Посмотреть наши предыдущие публикации:</div>
            <div className="paginator__control">
                {position > 3 && <Link page={Math.max(position - 5, 1)}>
                    <div className="paginator__arrow">
                        <img src='/paginator/left.png'/>
                    </div>
                </Link>}
                <div className="paginator__numbers">
                    <Numbers rubric={rubric} position={position} end={end} />
                </div>
                {(+position + 3) < end  && <Link page={Math.min(+position + +5, end)}>
                    <div className="paginator__arrow">
                        <img src='/paginator/right.png'/>
                    </div>
                </Link>}
            </div>
        </div>
    )
}

function Numbers({position, rubric, end}) {
    let start;

    if (position > 3) {
        start = position - 2
    } else {
        start = 1
    }

    const numNumbers = Math.min(5, end - start)

    const numbers = Array.from(Array(numNumbers), (_, i) => i+start);

    function getClassStyle(num) {
        return "paginator__number " + (num == position? " paginator__number_active": "")
    }

    return (
        <div className="paginator__numbers">
            {start != 1 && <div className="paginator__number">...</div>}
            {numbers.map(num => 
                <Link key={num} page={num} >
                    <div className={getClassStyle(num)}>
                        {num}
                    </div>
                </Link>
            )}
            {start + 5 < end && <div className="paginator__number">...</div>}
            {start + 5 >= end && <div className={getClassStyle(end)}>{end}</div>}
        </div>
    )
}