import React, { useRef, useEffect } from 'react';

export function Post({content, created, rubric}) {
    const body = useRef(null)

    useEffect(() => {
        body.current.innerHTML = content
    })

    return (
        <div className="banner banner_post">
            <div className="banner__rubric">{rubric}</div>
            <div className="banner_post__content">
                <div className="banner_post__created">{created}</div>
                <div ref={body} className="banner_post__body"></div>
            </div>
        </div>
    )
}