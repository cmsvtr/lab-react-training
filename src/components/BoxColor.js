function BoxColor (props) {
    
    function tohex (value) {    
        return value.toString(16).padStart(2, '0').toUpperCase();
    }

    const textColor = `rgb(${Math.abs(props.r/2)},${Math.abs(props.g/2)},${Math.abs(props.b/2)})`
    
    return (
        <div className="color-card">
            <div style={{border: '2px solid black', backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, height: '8vh'}}>
                <p style={{color: {textColor}, fontSize: '2vh'}}>rgb({props.r}, {props.g}, {props.b})</p>
                <p style={{color: {textColor}, fontSize: '2vh'}}>#{tohex(props.r)}{tohex(props.b)}{tohex(props.g)}</p>
                
            </div>

        </div>
    )
}

export default BoxColor