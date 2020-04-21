export function correctPost(data) {
    data.cards = data.cards.filter(filterOfBanner).map(chageUrlInBanner)
    data.hotList = data.hotList.filter(filterOfBanner).map(chageUrlInBanner)
    changeUrlInPost(data.post)
}

export function correctPage(page) {
    page.cards = page.cards.filter(filterOfBanner).map(chageUrlInBanner)
    page.hotList = page.hotList.filter(filterOfBanner).map(chageUrlInBanner)
    page.carousel = page.carousel.filter(filterOfBanner).map(chageUrlInBanner)
}

function filterOfBanner(item) {
    return !!item && !!item.img_src
}

export function chageUrlInBanner(bann) {
    if (!bann || !bann.img_src) return;
    bann.img_src = findAndCorrectImgSrc(bann.img_src)

    return bann;
}

export function changeUrlInPost(post) {
    post.content = findAndCorrectImgSrc(post.content)
    
    return post;
}

function findAndCorrectImgSrc(content) {
    content = replaceAllSubs(content, "http://tehnoomsk.ru", "")
    content = replaceAllSubs(content, "https://tehnoomsk.ru", "")
    content = replaceAllSubs(content, "/sites/default/files", "https://db.tehnoomsk.ru/files")
    content = replaceAllSubs(content, "sites/default/files", "https://db.tehnoomsk.ru/files")
    content = replaceAllSubs(content, "http://tehnoomsk.ruhttps//db.tehnoomsk.ru/files", "https://db.tehnoomsk.ru/files")
    content = replaceAllSubs(content, "https://tehnoomsk.ruhttps//db.tehnoomsk.ru/files", "https://db.tehnoomsk.ru/files")
    
    return content;
}

function replaceAllSubs(content, searchStr, replaceStr) {
    while(content.includes(searchStr)) {
        content = content.replace(searchStr, replaceStr)
    }

    return content
}