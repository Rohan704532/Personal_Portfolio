import React from 'react'
import "./Head.css"
import Typewriter from "typewriter-effect"
import ButtontoTop from '../buttonToTop/ButtontoTop'

export default function Head() {

  function goToNext(){
    window.scrollTo({top:712, left:0,behavior:'smooth'})
  }

  function goToContact() {
    window.scrollTo({ top: 5000, left: 0, behavior: "smooth" })
  }

  return (
    <>
    <div className='img'>
      <div className='mid'>
        <div className='mid-details'>
          <h1 className='welcome'>Welcome</h1>
        </div>
        <div className='mid-details'>
          <Typewriter
            options={{
              strings: ["I'm a Developer.", "I'm Rohan Singh","An Learner","....."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className='mid-details'>
          <p>Based in India, Gurgaon</p>
        </div>
        <div>
          <button onClick={() => goToContact()} className='hire_me'>Hire Me</button>
        </div>
        <div onClick={()=>goToNext()} class="down-arrow"></div>
      </div>

    </div>
    <ButtontoTop/>
    </>
  )
}
