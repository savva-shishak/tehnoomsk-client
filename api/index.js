import { rubrics } from "./rubrics";
import { fakeList } from "./hot-list"
import { fakeCards } from "./cards"
import { fakeCarousel } from "./carousel"
import { post } from "./post"
import axios from 'axios'

export const domainOfData = "http://127.0.0.1:8000/public"

export const getPageData = fpages

export const getPost = fpost

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

async function pages(pageNum) {
    const {data} = await axios.get(domainOfData + '/page/' + pageNum)
    
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

async function httpPost(id) { 
    const {data} = await axios.get(domainOfData + '/node/7')
    
    return data
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