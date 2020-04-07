import { Header } from "./header";

export function Layout({title, children}) {
    return (
        <div className="container">
            <Header />
            {children}
            <style jsx>{`
                
            `}</style>
        </div>
    )
}