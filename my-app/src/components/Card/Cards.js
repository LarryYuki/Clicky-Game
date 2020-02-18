import React from 'react'

function Cards(props) {
    return (
        <img 
        src={props.imageLink}
        alt={props.name}
        onClick={()=>props.handlerNONSENSE(props.name)}
        />
    )
}

export default Cards


