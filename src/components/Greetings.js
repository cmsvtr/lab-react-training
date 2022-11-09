function Greetings (props) {
    
    const greet = {
        'de' : 'Hallo',
        'en' : 'Hello',
        'es' : 'Hola',
        'fr' : 'Bonjour',
        'tp' : 'Anauê'
    };

    const language = props.lang;
    
    return (
        <div className= 'greeting-card'>
            <p>{greet[language]} {props.children}</p>
        </div>
    )
}

export default Greetings