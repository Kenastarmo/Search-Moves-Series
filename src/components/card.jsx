import React from 'react'

export const card = (props) => {
  return (
    <div className='card_container'>
        <img src={props.poster}></img>
        <h5>{props.title}</h5>
    </div>
  )
}

export default card;