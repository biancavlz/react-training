import React from 'react'
import './Random.css'

const Random = props => {
    let randomNum = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    return (
        <div>
            <h2 className="Random">
                Random value between {props.min} and {props.max} => {randomNum}
            </h2>
        </div>
    )
}

export default Random
