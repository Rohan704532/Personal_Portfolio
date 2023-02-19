import React from 'react'
import "./Ex.css"

export default function Ex(props) {
  return (
    <div className='edu'>
      <p className='props'>{props.data.Year}</p>
      <h2 id='id' className='props'>{props.data.Designation}</h2>
      <h3 id='desi'>{props.data.university}</h3>
      <h3>Client: {props.data.Client}</h3>
    </div>
  )
}
