import { rubrics } from "./rubrics";
import { fakeList } from "./hot-list"
import { fakeCards } from "./cards"
import { fakeCarousel } from "./carousel"

export function getPageData(pageNum) {
    return new Promise(res => {
        setTimeout(() => {
            res({
                hotList: pageNum == 1 ? fakeList.slice(0, -2) : fakeList, 
                cards: fakeCards, 
                rubrics: rubrics,
                carousel: pageNum != 1? undefined : fakeCarousel
            })
        }, 500);
    })
}


