import React from 'react'
import "./Ed.css"

export default function Ed(props) {
  return (
    <div className='edu'>
      <p className='props'>{props.data.Year}</p>
      <h2 className='props'>{props.data.Qualification}</h2>
      <h3 id="university" className='props'>{props.data.university}</h3>
      <h3 className='props'>{props.data.para}</h3>
      <h4>Inner Me:- {props.data.Inner_ME}</h4>
    </div>
  )
}
