
function CreditCard (props) {
    
    return (
        <div className= 'credit-card' style={{backgroundColor : props.bgColor, color : props.color}}>
            <img src={props.image} alt='card'/>
            <h3>**** **** **** {props.number.slice(-4)}</h3>
            <div className="expire-bank">
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard