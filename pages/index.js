import Link from "next/link"

const Index = () => (
    <div>
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
        <h1>Hello System!</h1>
    </div>
)


export default Index;