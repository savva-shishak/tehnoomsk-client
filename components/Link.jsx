import NextLink from "next/link"
import { useRouter } from "next/router"

export function Link({page, rubric, tag, children}) {
    const {query} = useRouter()
    const params = []

    if (page) {
        params.push("page=" + page)
    } else if (query.page) {
        params.push("page=" + query.page)
    }

    if (rubric) {
        params.push("rubric=" + rubric)
    } else if (query.rubric) {
        params.push("rubric=" + query.rubric)
    }

    if (tag) {
        params.push("tag=" + tag)
    } else if (query.tag) {
        params.push("tag=" + query.tag)
    }

    const url = "/?" + params.join("&")

    return <NextLink href={url}>
        {children}
    </NextLink>
}