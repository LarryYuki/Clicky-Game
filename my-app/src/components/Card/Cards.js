import React from 'react'
import "./Cards.css"

function Cards(props) {
 return(
        <img 
        className='pic-container'
        src={props.imageLink}
        alt={props.name}
        onClick={()=>props.picClick(props.name)}
        />
   )
}

export default Cards


