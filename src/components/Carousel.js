import {useState} from 'react'

function Carousel(props) {
    
    const [i, setI] = useState(0);
    
    function left() {
       setI(Math.abs(i-1)%4) 
    }

    function right() {
        setI(Math.abs(i+1)%4)         
    }

    return (
        <div className='carousel-card'>
            <img src={props.images[i]} alt='person'/>
            <div className='btns-carousel'>
                <button onClick={left}>Left</button>
                <button onClick={right}>Right</button>
            </div>
        </div>
    )
}

export default Carousel