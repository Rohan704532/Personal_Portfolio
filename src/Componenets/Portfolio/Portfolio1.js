import React from 'react'
import "./Portfolio.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Portfolio1(props) {
 const{showDetails}=props

    {/*const pro = {
        "ToDo App": "Herewe hjave a brick of wall",
        "ToDo List": "Herewe hjave a brick of wall1",
        "E-cars": "Herewe hjave a brick of wall2",
        "E-Commerce": "Herewe hjave a brick of wall3",
        "Twitter Clone": "Herewe hjave a brick of wall3",
        "Self-Portfolio": "Herewe hjave a brick of wall3"
    }*/}

    const [product, setData] = useState([])
    useEffect(() => {

        fetch("project.json")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
    }, []);

    return (
        <div>
            <div className='port'>
                <h1>PORTFOLIO</h1>
            </div>
            <div>
                <p className='my_work'>My Work</p>
                <hr className='hr3' />
            </div>
            <div className='projects'>
                {product.map((keys) => {
                    return (
                        <div class="image">
                            <div>
                                <img class="image__img" src={keys.image} alt="Bricks" />
                                <Link to="/Detail"><div onClick={()=>showDetails(keys)} class="image__overlay image__overlay--primary">
                                <h2 className='image__title'>
                                        {keys.title}
                                    </h2>
                                    <p>{keys.decr}</p>
                                </div></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/*{Object.values(pro).map((value, index) => {
        return (
          <div keys={index}>
            <h2>{value}</h2>

            <hr />
          </div>
        );
      })}*/}
        </div>
    )
}
export default Portfolio1;
