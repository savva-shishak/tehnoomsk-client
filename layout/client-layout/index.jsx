import { Header } from "./header";
import { Footer } from "./footer";
import Head from "next/head";  

export function Layout({title, children}) {
    return (
        <div className="container">
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8"/>    
                <meta name="description" content="Наука, Технологии, ВПК, Импортозамещение, ИТб айти" />
                <meta name="Keywords" content="Наука, Технологии, ВПК, Импортозамещение, ИТб айти"/> 
                {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/> */}
                <link rel="shotcup icon" href="layout/logo.ico"/>
                {/* <script src="https://kit.fontawesome.com/fdfd4b4d91.js" crossOrigin="anonymous"></script> */}
                
            </Head>
            
            <Header />
            {children}
            <Footer/>
        </div>
    )
}