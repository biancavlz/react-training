import React from 'react'
import './Greetings.css'

const Greetings = props => {
    let greetings = 'Hello'
    if (props.lang === 'fr') greetings = 'Bonjour'
    if (props.lang === 'es') greetings = 'Hola'
    return (
        <div>
            <h1 className="Greetings">
                {greetings} {props.children}
            </h1>
        </div>
    )
}

export default Greetings
