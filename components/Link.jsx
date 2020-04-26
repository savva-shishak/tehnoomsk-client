import NextLink from "next/link"
import { useRouter } from "next/router"

export function Link({page, rubric, children}) {
    const {query} = useRouter()
    const params = []

    if (page) {
        params.push("page=" + page)
    } else if (query.page) {
        params.push("page=" + query.page)
    }

    if (rubric && rubric != "all") {
        params.push("rubric=" + rubric)
    } else if (query.rubric) {
        params.push("rubric=" + query.rubric)
    }

    const url = "/?" + params.join("&")

    return <NextLink href={url}>
        {children}
    </NextLink>
}