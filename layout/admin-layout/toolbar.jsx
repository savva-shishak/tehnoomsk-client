import Link from "next/link"
import { useRouter } from "next/router"

export function Toolbar() {
    return (
        <div className="toolbar">
            <Tool name='Статьи' href='posts' />
        </div>
    )
}

function Tool({name, href}) {
    const router = useRouter()
    const fullHref = '/admin/' + href
    
    return <Link href={fullHref}>
        <div className={"toolbar__tool" + (router.pathname == fullHref? " toolbar__tool_active" : "")}>{name}</div>
    </Link>
}