class Prices extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currency: "USD"
        }
    }

    render(){
        let list = ""
        if(this.state.currency === "USD"){
            list = <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.bpi.USD.description}:
                        <span>   </span>
                        <span className="badge badge-success">{this.props.bpi.bpi.USD.code}</span>
                        <span>  </span>
                        <strong>${parseFloat(this.props.bpi.bpi.USD.rate_float).toFixed(2)}</strong>
                    </li>
        } else if(this.state.currency === "GBP"){
            list = <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.bpi.GBP.description}:
                        <span>   </span>
                        <span className="badge badge-success">{this.props.bpi.bpi.GBP.code}</span>
                        <span>  </span>
                        <strong>${parseFloat(this.props.bpi.bpi.GBP.rate_float).toFixed(2)}</strong>
                    </li>
        } else if(this.state.currency === "EUR"){
            list = <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.bpi.EUR.description}:
                        <span>   </span>
                        <span className="badge badge-success">{this.props.bpi.bpi.EUR.code}</span>
                        <span>  </span>
                        <strong>${parseFloat(this.props.bpi.bpi.EUR.rate_float).toFixed(2)}</strong>
                    </li>
        }

        return(

            <div>
                <ul className="list-group">
                    {list}
                </ul>
                <br/>
                <select onChange={e => {this.setState({currency: e.target.value})}} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        )
    }
}

export default Prices;