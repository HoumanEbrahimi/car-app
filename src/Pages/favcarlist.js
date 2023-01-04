import React, { useState } from 'react';
import contact from './contact.js';
import { Link } from 'react-router-dom'
import Sewy from './sewy.js';


const favCarList = ({id,imagePath,title,t1,trim,Dealership,email}) =>{
    const ButtonMailto = ({ mailto, label }) => {
        
        return (
            <button className="dealership-btn"
                to={email}
                
                onClick={(e) => {
                    window.location.href = `mailto:${mailto}`;
                    e.preventDefault();
                }}
            >
                {label}
            </button>
        );
    };
    return(
        
        <article className='single-tour' >

            <img src={imagePath} alt={title}/>
            <footer>
                <button className="dealership-btn" onClick={()=> window.open(Dealership, "_blank")}> 
                    Dealer
                </button>
                    
                    <ButtonMailto label="Contact Dealer" mailto={email}/>


                <div className='tour-info'>
                    <h4> {title} </h4>
                    <h4 className='tour-price'> {trim}</h4>

                </div>
                
            </footer>
            </article>


    )


    
}

export default favCarList;