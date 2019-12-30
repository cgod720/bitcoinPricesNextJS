import Link from 'next/link'

const Nav = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>

        <style jsx>{`
            ul {
                background-color: red;
                display: flex;
            }
            li {
                margin-right: 10vw;
                list-style-type: none;
            }
        `}</style>
    </div>
)


export default Nav;