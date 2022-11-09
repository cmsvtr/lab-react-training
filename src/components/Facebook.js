
function Facebook(props) {
    
 
    return (
        <div>
            {props.students.map(student => {
                return (
                    <div key={student['lastName']} className='facebook-card'>
                        <img src={student['img']} alt='User' />
                        <div className= 'facebook-info'>
                            <p><span>First name: </span>{student['firstName']}</p>
                            <p><span>Last name: </span>{student['lastName']}</p>
                            <p><span>Country: </span>{student['country']}</p>
                            <p><span>Type: </span>{student['isStudent'] ? ('Student') : ('Teacher')}</p>
                        </div>
                    </div>                    
                )})
            }
        </div>    
    )    
}

export default Facebook