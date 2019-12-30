import Head from 'next/head'
import Nav from './Nav'

const Container = (props) => (
    <div>
        <Head>
            <title>Bitcoin Prices</title>
            <link rel="icon" href="https://en.bitcoin.it/w/images/en/6/69/Btc-sans.png"/>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
        </Head>
        <Nav />
        <div className="container">
            {props.children}   
        </div>
    </div>
)

export default Container;