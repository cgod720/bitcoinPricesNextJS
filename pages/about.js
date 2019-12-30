import Link from "next/link"

const Index = () => (
    <div>
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
        <h4>this is the about page yo</h4>
    </div>
)


export default Index;