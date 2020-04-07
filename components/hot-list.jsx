import React, { useState, useEffect } from 'react'
import { BItem } from "../components/banners"

export function HotList({startIndex, numItems}) {
    const [items, setItems] = useState(fakeList.slice(startIndex, startIndex+numItems));

    console.log(fakeList.slice(startIndex, 3));

    return (
        <div className="hotlist">
            {items.map(({id, img_src, rubric, post_id, title, anons}) => 
                <div key={id} className="list_item">
                    <BItem 
                        imgSrc={img_src}
                        rubric={rubric}
                        postId={post_id}
                        title={title}
                        anons={anons}
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

const fakeList = [
    {
        id: 1,
        img_src: '/hot-list/аппарат.jpg',
        rubric: 'ВПК',
        post_id: 1,
        title: 'Новый российский SSD запущен в серию на заводе GS Nanotech',
        anons: 'Представлен новый российский тягач УРАЛ NEXT. В разработке машины принимали участие представители завода и государственного предприятия НАМИ...'
    },
    {
        id: 2,
        img_src: '/hot-list/аппарат.jpg',
        rubric: 'Медицина',
        post_id: 2,
        title: 'Новый российский SSD запущен в серию на заводе GS Nanotech',
        anons: 'Представлен новый российский тягач УРАЛ NEXT. В разработке машины принимали участие представители завода и государственного предприятия НАМИ...'
    },
    {
        id: 3,
        img_src: '/hot-list/аппарат.jpg',
        rubric: 'Производство',
        post_id: 3,
        title: 'Новый российский SSD запущен в серию на заводе GS Nanotech',
        anons: 'Представлен новый российский тягач УРАЛ NEXT. В разработке машины принимали участие представители завода и государственного предприятия НАМИ...'
    },
    {
        id: 4,
        img_src: '/hot-list/аппарат.jpg',
        rubric: 'Наука',
        post_id: 4,
        title: 'Новый российский SSD запущен в серию на заводе GS Nanotech',
        anons: 'Представлен новый российский тягач УРАЛ NEXT. В разработке машины принимали участие представители завода и государственного предприятия НАМИ...'
    },
    {
        id: 5,
        img_src: '/hot-list/аппарат.jpg',
        rubric: 'Наука',
        post_id: 4,
        title: 'Новый российский SSD запущен в серию на заводе GS Nanotech',
        anons: 'Представлен новый российский тягач УРАЛ NEXT. В разработке машины принимали участие представители завода и государственного предприятия НАМИ...'
    },
    {
        id: 6,
        img_src: '/hot-list/аппарат.jpg',
        rubric: 'Наука',
        post_id: 4,
        title: 'Новый российский SSD запущен в серию на заводе GS Nanotech',
        anons: 'Представлен новый российский тягач УРАЛ NEXT. В разработке машины принимали участие представители завода и государственного предприятия НАМИ...'
    },
    {
        id: 7,
        img_src: '/hot-list/аппарат.jpg',
        rubric: 'Наука',
        post_id: 4,
        title: 'Новый российский SSD запущен в серию на заводе GS Nanotech',
        anons: 'Представлен новый российский тягач УРАЛ NEXT. В разработке машины принимали участие представители завода и государственного предприятия НАМИ...'
    },
]