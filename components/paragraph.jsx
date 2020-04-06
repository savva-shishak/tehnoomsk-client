import React from 'react'

export function Paragraph({children}) {
    return (
        <div className="paragraph">
            {children}
        </div>
    )
}

export const P = Paragraph

export function PTitle({children}) {
    return (
        <div className="paragraph__title">
            {children}
        </div>
    )
}

export function PSubtitle({children}) {
    return (
        <div className="paragraph__subtitle">
            {children}
        </div>
    )
}

export function PBody({children}) {
    return (
        <div className="paragraph__body">
            {children}
        </div>
    )
}