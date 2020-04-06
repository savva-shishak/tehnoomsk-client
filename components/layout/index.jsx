import { Header } from "./header";

export function Layout({title, children}) {
    return (
        <div className="container">
            <Header />
            {children}
            <style jsx>{`
                // .container {
                //     padding: 0 calc(50vw - 480px);
                // }
            `}</style>
        </div>
    )
}