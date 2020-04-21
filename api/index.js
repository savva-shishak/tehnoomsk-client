import { rubrics } from "./rubrics";
import axios from 'axios'
import { correctPost, correctPage } from "./hrefs"

export const hostname = "https://www.tehnoomsk.ru"

export const getPageData = async (pageNum) => {
    const {data} = await axios.get(hostname + '/api/page', {params: {page: pageNum}})

    correctPage(data)

    return data;
}

export const getPost = async (id) => { 
    const {data} = await axios.get(hostname + '/api/post', {params: {id}})

    correctPost(data)

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





