import {useState} from 'react';

function ClickablePicture(props) {
    
    const [img, setImg] = useState(props.img);
    
    function click() {
        setImg(img === props.img ? props.imgClicked : props.img);
    }
    
    return (
        <div className='dice-card'>
            <h3>Click me</h3>
            <img src={img} alt="dice" onClick={click}/>
        
        </div>
    )
}

export default ClickablePicture