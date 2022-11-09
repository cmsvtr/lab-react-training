import {useState} from 'react';

function Dice(props) {
    const [diceI, setDiceI] = useState(0);
    
    function click() {
        setDiceI(0)
        setTimeout(() => {
            setDiceI(Math.floor(Math.random()*6)+1);    
        }, 1000);
    }
    
    return (
        <div className='dice2-card'>
            <h3>Click me for random dice</h3>
            <img src={props.img[diceI]} alt="dice" onClick={click}/>        
        </div>
    )
}

export default Dice