import React, { useState } from 'react';
import contact from './contact.js';

const favCarList = ({id,imagePath,title,t1,trim,Dealership}) =>{

    return(
        <article className='single-tour' >

            <img src={imagePath} alt={title}/>
            <footer>
                <button className="dealership-btn" onClick={()=> window.open(Dealership, "_blank")}> 
                    Dealer
                </button>
                <button className="dealership-btn" onClick={()=>window.open(contact,'_blank')}>Contact Dealer</button>
                <div className='tour-info'>
                    <h4> {title} </h4>
                    <h4 className='tour-price'> {trim}</h4>

                </div>
                
            </footer>
            </article>


    )


    
}

export default favCarList;