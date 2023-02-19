import React from 'react'
import Head from "./Componenets/Head/Head"
import Popup from "./Componenets/Popup/Popup"
import { Routes, Route } from "react-router-dom"
import About from "./Componenets/About/About"
import Resume from "./Componenets/Resume/Resume"
import Portfolio from "./Componenets/Portfolio/Portfolio1"
import { useState } from 'react'
import Contact from "./Componenets/Contact/Contact"
import Navbar from "./Componenets/Navbar/Navbar"
import "./App.css"

function App() {

    const [Detail, setDetails] = useState([]);

    function showDetails(params) {
        setDetails(params)
    }

    return (
        <div>
            <div className='img'>
                <Navbar/>
                <Head />
            </div>
            <About />
            <Resume />
            <Portfolio showDetails={showDetails} />
            <Routes>
                <Route path="/Detail" element={<Popup showDetails={showDetails} Detail={Detail} />}></Route>
            </Routes>
            <Contact />
        </div>
    )
}

export default App
