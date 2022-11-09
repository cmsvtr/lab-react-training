function Rating (props) {

    return (
        <div className= 'rating-card'>
            <p>{`\u2605`.repeat(Math.round(props.children)).padEnd(5,`\u2606`)}</p> 
        </div>
    )
}

export default Rating