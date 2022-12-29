import React, { useState } from 'react';

const favCarList = ({id,imagePath,title,t1,trim}) =>{

    return(
        <article className='single-tour' >

            <img src={imagePath} alt={title}/>
            <footer>
                <button className="dealership-btn"> 
                    Dealership
                </button>
                <div className='tour-info'>
                    <h4> {title} </h4>
                    <h4 className='tour-price'> {trim}</h4>

                </div>
                
            </footer>
            </article>


    )


    
}

export default favCarList;