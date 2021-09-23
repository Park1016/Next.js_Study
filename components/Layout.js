import Nav from './Nav'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>my blog</title>
                <meta keyword="my blog powered by next js" />
                <meta contents="my blog powered by next js" />
            </Head>
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout;