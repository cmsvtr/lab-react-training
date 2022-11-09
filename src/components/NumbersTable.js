function NumbersTable (props) {
    
    const arr = [...Array(props.limit).keys()];
    
    
    return (
        <div className='numbers-table'>
            {arr.map(e => {
                return (e+1)%2 ? (<p className='square' key={e}>{e+1}</p>) : (<p className='red-square' key={e}>{e+1}</p>)
                })
            }    

        </div>
    )
}

export default NumbersTable