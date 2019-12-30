import Fetch from 'isomorphic-unfetch'
import Container from "../components/Container"

const Index = (props) => (
    <Container>
        <div>
            <h1>Bitcoin: ${props.bpi.bpi.USD.rate}</h1>
            
        </div>
    </Container>
)


Index.getInitialProps = async function(){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json()

    return {
        bpi: data
    }
}

export default Index;