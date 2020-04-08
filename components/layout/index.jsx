import { Header } from "./header";
import { Footer } from "./footer";
import Head from "next/head";

export function Layout({title, rubrics, children}) {
    return (
        <div className="container">
            <Head>
                <title>{title}</title>
                <link rel="shotcup icon" href="layout/logo.ico"/>
            </Head>
            
            <Header />
            {children}
            <Footer rubrics={rubrics}/>
        </div>
    )
}