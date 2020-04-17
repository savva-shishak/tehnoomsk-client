import { rubrics } from "./rubrics";
import { fakeList } from "./hot-list"
import { fakeCards } from "./cards"
import { fakeCarousel } from "./carousel"
import { post } from "./post"
import axios from 'axios'

export const domainOfData = "http://localhost:3000/api"

export const getPageData = async pageNum => {
    // const data = await pages(pageNum);
    
    // data.cards.map(chageUrlInBanner)
    // data.carousel.map(chageUrlInBanner)
    // data.hotList.map(chageUrlInBanner)

    return await fpages(pageNum);
}

export const getPost = async id => { 
    // const data = await httpPost(id);

    // data.cards.map(chageUrlInBanner)
    // data.hotList.map(chageUrlInBanner)
    // changeUrlInPost(data.post)

    return await fpost();
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

function chageUrlInBanner(bann) {
    if (!bann.img_src) return;
    bann.img_src = bann.img_src.replace("https://tehnoomsk.ru", "")
    
    while(bann.img_src.includes("/sites/default/files")) {
        bann.img_src = bann.img_src.replace("/sites/default/files", "https://tehnoomsk.ru/files")
    }

    while(bann.img_src.includes("sites/default/files")) {
        bann.img_src = bann.img_src.replace("sites/default/files", "https://tehnoomsk.ru/files")
    }

    console.log(bann.img_src);
    return bann;
}

function changeUrlInPost(post) {
    while(post.content.includes("https://tehnoomsk.ru")) {
        post.content = post.content.replace("https://tehnoomsk.ru", "")
    }

    while(post.content.includes("/sites/default/files")) {
        post.content = post.content.replace("/sites/default/files", "https://tehnoomsk.ru/files")
    }

    while(post.content.includes("sites/default/files")) {
        post.content = post.content.replace("sites/default/files", "https://tehnoomsk.ru/files")
    }
    
    return post;
}

async function pages(pageNum) {
    const {data} = await axios.get(domainOfData + '/page', {
        params: {
            page: pageNum
        },
        crossDomain: true
    })
    
    return data
}

async function httpPost(id) { 
    const {data} = await axios.get(domainOfData + '/post', {
        params: {
            id
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json'
        },
        crossdomain: true
    })
    
    return data
}

function fpages(pageNum) {
    return new Promise(res => {
        res({
            hotList: fakeList,
            cards: fakeCards,
            carousel: pageNum == 1? fakeCarousel : []
        })
    })
}

async function fpost() {
    return new Promise(res => {
        res({
            post,
            cards: fakeCards,
            hotList: fakeList,
        })
    })
}