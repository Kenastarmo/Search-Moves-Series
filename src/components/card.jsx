import React from 'react'
import { NavLink } from 'react-router-dom';

export const card = (props) => {
  return (
    <NavLink>
    <div className='card_container'>
        <img src={props.poster}></img>
        <h4>{props.title}</h4>
    </div>
    </NavLink>
  )
}

export default card;