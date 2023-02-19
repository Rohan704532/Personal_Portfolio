import React, { useEffect, useState } from 'react'
import "./buttonToTop.css"

function ButtontoTop() {

    const [backtoTopButton, setBackToTopButton] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
        },[])

        const scrollUp = ()=>{
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
        }

  return (
    <div>
      {backtoTopButton &&(
        <button className='topbutton'onClick={scrollUp}>^</button>
      )}
    </div>
  )
}

export default ButtontoTop
