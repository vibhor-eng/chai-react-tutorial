import React from 'react'

function Card(props){
    console.log(props.channel)
    return (
        <div>card {props.channel}</div>
    )
}

export default Card