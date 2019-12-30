import Head from 'next/head'
import Nav from './Nav'

const Container = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>
)

export default Container;