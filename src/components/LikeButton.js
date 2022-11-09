import {useState} from 'react';

function LikeButton() {
    
    const [counter, setCounter] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const colorArr = ['purple','blue','green','yellow','orange','red'];

    function like () {
        setCounter(counter + 1);
        setColorIndex((colorIndex + 1)%colorArr.length);
    }
    
    return (
        <button style={{backgroundColor: colorArr[colorIndex]}} onClick= {like}>{counter} Likes</button>
    )
}

export default LikeButton