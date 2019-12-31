class Prices extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.bpi.USD.description}:
                          <span>   </span>
                          <span className="badge badge-success">{this.props.bpi.bpi.USD.code}</span>
                          <span>  </span>
                          <strong>${parseFloat(this.props.bpi.bpi.USD.rate_float).toFixed(2)}</strong>
                    </li>

                </ul>
            </div>
        )
    }
}

export default Prices;