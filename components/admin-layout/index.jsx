import { useRouter } from "next/router"
import { useEffect } from "react"
import Cookies from 'js-cookie'

export function ALayout({children}) {
    const router = useRouter()

    useEffect(() => {
       const isAuth = Cookies.getJSON('auth');
        
        if (!isAuth) {
            router.push("/login")
        }
    })
    
    return (
        <div className="container">
            {children}
            <style jsx>{`
                .container {
                    margin-top: 70px;
                    max-width: 95%;
                }
            `}</style>
        </div>
    )
}