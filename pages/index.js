import Fetch from 'isomorphic-unfetch'
import Container from "../components/Container"
import Prices from "../components/Prices"

const Index = (props) => (
    <Container>
        <div>
            <h1>Bitcoin: ${props.twoDec}</h1>
            <h4>Current time: {props.bpi.time.updated}</h4>
            <Prices bpi={props.bpi}/>
        </div>
    </Container>
)


Index.getInitialProps = async function(){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json()
    let twoDec = data.bpi.USD.rate_float
    let thirdtime = parseFloat(twoDec).toFixed(2)

    return {
        bpi: data,
        twoDec: thirdtime
    }
}

export default Index;