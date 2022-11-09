
function IdCard (props) {

    return (
        <div key={props.lastName} className= 'id-card'>
            <img src={props.picture} alt='User' />
            <div className= 'id-info'>
                <p><span>First name: </span>{props.firstName}</p>
                <p><span>Last name: </span>{props.lastName}</p>
                <p><span>Gender: </span>{props.gender}</p>
                <p><span>Height: </span>{props.height}</p>
                <p><span>Birth: </span>{props.birth}</p>
            </div>
        </div>
    )
}

export default IdCard

