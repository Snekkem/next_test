import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = 'Next App'}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={"next, js, react"} />
                <meta name="description" content={"test next"} />
                <meta charSet={"utf-8"} />
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
                <Link href={'/about'}><a>About</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav {
                position: fixed;
                height: 60px;
                left: 0;
                right: 0;
                top: 0;
                background: lightgray;
                display: flex;
                justify-content: space-around;
                align-items: center;
                
             }
             
             nav a {
                text-decoration: none;
                color: #000;
             }
             
             main {
                margin-top: 60px;
                padding: 1rem;
             }
             
            `}</style>
        </>
    )
}