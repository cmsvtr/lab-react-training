function DriverCard (props) {
    return (
        <div className="driver-card">
            <img src={props.img} alt='driver'/>
            <div className= 'driver-info'>
                <h3>{props.name}</h3>
                <h3>{`\u2605`.repeat(Math.round(props.rating)).padEnd(5,`\u2606`)}</h3>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>




        </div>
    )
}

export default DriverCard