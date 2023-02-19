import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div>
            <div className='about'>
                <h1>ABOUT ME</h1>
            </div>
            <div>
                <p className='know'>Know Me More</p>
                <hr className='hr' />
            </div>
            <div className='intro'>
                <div id='margin_right'>
                    <h2 id='line'>I'm Rohan Singh, a Web Developer</h2>
                    <p>An ambitious individual with 1.5 + years of experience, currently managing the position - Associate Software Engineer. Aspiring
for a suitable position in your company, with leading edge skills to enhance bottom line profitability. Excellent in JavaScript,
HTML, CSS, React, API, MS Excel and Git.
</p>
                </div>
                <div >
                    <ul className='personal_info'>
                        <li className='li'>
                            <span><b>Name:</b></span>
                            "Rohan Singh"
                        </li>
                        <li className='li'>
                            <span><b>Email:</b></span>
                            singh704532@gmail.com
                        </li>
                        <li className='li'>
                            <span><b>Age:</b></span>
                            "23"
                        </li>
                        <li className='li'>
                            <span><b>From:</b></span>
                            "India, Delhi"
                        </li>
                    </ul>
                    <a target="blank"href="https://docs.google.com/document/d/10oSbtn7FXGnRuus4lFcmd4BKygCoPmLl/edit?usp=share_link&ouid=104787425974837100668&rtpof=true&sd=true"><button className='cv'>Download CV</button></a>
                </div>
            </div>
            <div className='add'>
                <ul  className='add_on'>
                    <li className='add_on_li'>
                        <span className='add_on_li_sp'><b>20</b></span>
                        <p  className='span_p'>Months of Experience</p>
                    </li>
                    <li className='add_on_li'>
                        <span className='add_on_li_sp'><b>6+</b></span>
                        <p className='span_p'>Technologies</p>
                    </li>
                    <li className='add_on_li'>
                        <span className='add_on_li_sp'><b>5+</b></span>
                        <p className='span_p'>Projects done</p>
                    </li>
                    <li className='add_on_li'>
                        <span className='add_on_li_sp'><b>2+</b></span>
                        <p className='span_p'>Awards</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
