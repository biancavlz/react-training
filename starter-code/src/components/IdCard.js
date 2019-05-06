import React from 'react'
import './IdCard.css'

const IdCard = props => {
    return (
        <div className="IdCard">
            <img src={props.picture} alt="image" />
            <div>
                <p>
                    <strong>First Name: </strong>
                    {props.firstname}
                </p>
                <p>
                    <strong>Last Name: </strong>
                    {props.lastName}
                </p>
                <p>
                    <strong>Gender: </strong>
                    {props.gender}
                </p>
                <p>
                    <strong>Height: </strong>
                    {props.height}
                </p>
                <p>
                    <strong>Birth: </strong>
                    {props.birth}
                </p>
            </div>
        </div>
    )
}

export default IdCard
