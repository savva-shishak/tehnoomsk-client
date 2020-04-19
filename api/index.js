import { rubrics } from "./rubrics";
import { fakeList } from "./hot-list"
import { fakeCards } from "./cards"
import { fakeCarousel } from "./carousel"
import { post } from "./post"
import axios from 'axios'

export const hostname = "http://localhost:3000"

export const getPageData = async (pageNum) => {
    const {data} = await axios.get(hostname + '/api/page', {params: {page: pageNum}})
    
    data.cards = data.cards.filter(filterOfBanner).map(chageUrlInBanner)
    data.hotList = data.hotList.filter(filterOfBanner).map(chageUrlInBanner)
    data.carousel = data.carousel.filter(filterOfBanner).map(chageUrlInBanner)

    return data;
}

export const getPost = async (id) => { 
    const {data} = await axios.get(hostname + '/api/post', {params: {id}})

    data.cards = data.cards.filter(filterOfBanner).map(chageUrlInBanner)
    data.hotList = data.hotList.filter(filterOfBanner).map(chageUrlInBanner)
    changeUrlInPost(data.post)

    return data;
}

export function getRubrics() {
    return new Promise(res =>{
        res({rubrics})
    })
}

export function getEnd() { 
    return new Promise(res => {
        setTimeout(() => {
            res(446)
        }, 2000);
    })
}

function filterOfBanner(item) {
    return !!item && !!item.img_src
}

function chageUrlInBanner(bann) {
    if (!bann || !bann.img_src) return;
    bann.img_src = bann.img_src.replace("https://tehnoomsk.ru", "")
    
    while(bann.img_src.includes("/sites/default/files")) {
        bann.img_src = bann.img_src.replace("/sites/default/files", "https://db.tehnoomsk.ru/files")
    }

    while(bann.img_src.includes("sites/default/files")) {
        bann.img_src = bann.img_src.replace("sites/default/files", "https://db.tehnoomsk.ru/files")
    }

    return bann;
}

function changeUrlInPost(post) {
    while(post.content.includes("https://tehnoomsk.ru")) {
        post.content = post.content.replace("https://tehnoomsk.ru", "")
    }

    while(post.content.includes("/sites/default/files")) {
        post.content = post.content.replace("/sites/default/files", "https://db.tehnoomsk.ru/files")
    }

    while(post.content.includes("sites/default/files")) {
        post.content = post.content.replace("sites/default/files", "https://db.tehnoomsk.ru/files")
    }
    
    return post;
}
