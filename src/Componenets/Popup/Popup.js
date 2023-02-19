import React from 'react'
import "./Popup.css"
import { Link } from 'react-router-dom'

function Popup(props) {

    const { Detail } = props
    console.log(Detail)

    return (
        <div className='popup'>
            <div className='inner_popup'>
                <div className='title'>
                    <h2>{Detail.title}</h2>
                    <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg></Link>
                </div>
                <div className='title1'>
                    <div>
                        <img className='prj_img' src={Detail.image1}></img>
                    </div>
                    <div className='padding_35'>
                        <div className='margin_bottom'>
                            <h3 id='project_info'>Project Info: </h3>
                            <span>{Detail.info}</span>
                        </div>
                        <div>
                            <h3>Project Details:</h3>
                            <ul>
                                <li className='li3'>
                                    <span>Functionality:</span>
                                    {Detail.Functionality}
                                </li>
                                <li className='li3'>
                                    <span>Technologies:</span>
                                    {Detail.details.tECHNOLOGIES}
                                </li>
                                <li className='li3'>
                                    <span>Date:</span>
                                    {Detail.details.Date}
                                </li>
                                <li className='li3'>
                                    <span>URL:</span>
                                    <a target="_blank" href={Detail.details.URL}>{Detail.details.URL}</a>
                                </li>
                                <li className='li3'>
                                    <span>Source Code:</span>
                                    <a target="_blank" href={Detail.Source}>{Detail.Source}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup
