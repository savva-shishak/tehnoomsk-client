import React, { useState, useEffect } from 'react'
import { BItem } from "../components/banners"

export function HotList({banners}) {

    return (
        <div className="hotlist">
            {banners.map(({id, img_src, subtitle, rubric_name, post_id, title, anons}) => 
                <div key={id} className="list_item">
                    <BItem 
                        imgSrc={img_src}
                        rubric={rubric_name}
                        postId={post_id}
                        title={title}
                        anons={anons}
                        subtitle={subtitle}
                    />
                </div>
            )}
            <style jsx>{`
                .list_item {
                    padding: 5px 0;
                }
            `}</style>
        </div>
    )
}