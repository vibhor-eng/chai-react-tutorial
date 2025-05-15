import React from 'react'

function Card({channel,btntxt}){
   
    return (
        <div>
            card {channel}
            <button>{btntxt}</button>
        </div>
    )
}

export default Card