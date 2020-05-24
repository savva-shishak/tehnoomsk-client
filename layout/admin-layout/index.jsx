import { useRouter } from "next/router"
import { useEffect } from "react"
import { Toolbar } from './toolbar'
import Cookies from 'js-cookie'

export function ALayout({children}) {
    const router = useRouter()

    useEffect(() => {
        if (!getAuth()) {
            router.push("/login")
        } else {
            if (router.pathname == '/admin') {
                router.push("/admin/posts")
            }
        }
    })
    
    return (
        <div className="container admin">
            <Toolbar />
            {children}
        </div>
    )
}

let isAuth = false;

function getAuth() {
    if (!isAuth) {
        isAuth = Cookies.getJSON('auth');
    }

    return isAuth
}