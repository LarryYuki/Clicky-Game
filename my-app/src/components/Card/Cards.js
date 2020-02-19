import React from 'react'
import "./Cards.css"

console.log()
function Cards(props) {
    // <div onClick={()=> props.imageClick(props.)}
 return(
       // <div className='pic-container'>
        <img 
        className='pic-container'
        src={props.imageLink}
        alt={props.name}
        onClick={()=>props.picClick(props.name)}
        />
   // </div>
   )
}

export default Cards


