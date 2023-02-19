import React from 'react'
import "./Resume.css"
import Ed from "../Ed/Ed"
import Ex from "../Ex/Ex"
import { useEffect, useState } from "react"

export default function Resume() {
    const [ed, setEd] = useState([])
    const [ex, setEx] = useState([])

    useEffect(() => {
        fetch("ed.json")
            .then((res) => res.json())
            .then((res) => {
                setEd(res)
            })
    }, [])

    useEffect(() => {
        fetch("ex.json")
            .then((res) => res.json())
            .then((res) => {
                setEx(res)
            })
    },[])
    return (
        <div className='main'>
            <div className='summary'>
                <h1>SUMMARY</h1>
            </div>
            <div>
                <p className='resume'>Resume</p>
                <hr className='hr2' />
            </div>
            <div className='ed_ex'>
                <div className='Education'>
                    <h2>My Education</h2>
                    {ed.map((info) => (
                        <Ed data={info} />
                    ))
                    }
                </div>
                <div className='Experience'>
                    <h2>My Experience</h2>
                    {ex.map((info1) => (
                        <Ex data={info1} />
                    ))}
                </div>
            </div>
            <div className='contain'>
                <h2 id='my_skills'>My Skills</h2>
                <div className='skills2'>
                    <div className='width'>
                        <div className='skills1'>
                            <p>HTML</p>
                            <span>
                                95%
                            </span>
                        </div>
                        <div className='bar'><div id='p_bar1'></div></div>
                        <div className='skills1'>
                            <p>JavsScript</p>
                            <span>
                                70%
                            </span>
                        </div>
                        <div className='bar'><div id='p_bar2'></div></div>
                        <div className='skills1'>
                            <p>CSS</p>
                            <span>
                                85%
                            </span>
                        </div>
                        <div className='bar'><div id='p_bar3'></div></div>
                        <div className='skills1'>
                            <p>React</p>
                            <span>
                                75%
                            </span>
                        </div>
                        <div className='bar'><div id='p_bar4'></div></div>
                    </div>
                    <div className='width'>
                        <div className='skills1'>
                            <p>Django</p>
                            <span>
                                50%
                            </span>
                        </div>
                        <div className='bar'><div id='p_bar5'></div></div>
                        <div className='skills1'>
                            <p>Networking</p>
                            <span>
                                70%
                            </span>
                        </div>
                        <div className='bar'><div id='p_bar6'></div></div>
                        <div className='skills1'>
                            <p>Python</p>
                            <span>
                                70%
                            </span>
                        </div>
                        <div className='bar'><div id='p_bar7'></div></div>
                        <div className='skills1'>
                            <p>Git</p>
                            <span>
                                90%
                            </span>
                        </div>
                        <div className='bar'><div id='p_bar8'></div></div>
                    </div>
                </div>
            </div>
            <div className='resume1'>
                <a target="blank" href="https://docs.google.com/document/d/10oSbtn7FXGnRuus4lFcmd4BKygCoPmLl/edit?usp=share_link&ouid=104787425974837100668&rtpof=true&sd=true"><button id='download_cv'>Download CV <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z" />
                    <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                </svg></button></a>
            </div>
        </div>
    )
}
