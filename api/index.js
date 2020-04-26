import { rubrics } from "./rubrics";
import axios from 'axios'
import { correctPost, correctPage } from "./hrefs"

const devHost = "http://localhost:3000"
const prodHost = "https://www.tehnoomsk.ru"
export const hostname = devHost

export const getPageData = async (page, rubric) => {
    const {data} = await axios.get(hostname + '/api/page', {params: {page, rubric}})
    
    correctPage(data)

    return data;
}

export const getPost = async (id) => { 
    const {data} = await axios.get(hostname + '/api/post', {params: {id}})

    correctPost(data)

    return data;
}

export async function getRubrics() {
    const {data} = await axios.get(hostname + '/api/rubrics')

    return data;
}

export async function getEnd() { 
    const {data} = await axios.get('http://ru.tehnoomsk/count')

    return data;
}





