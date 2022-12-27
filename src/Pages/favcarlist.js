import React, { useState } from 'react';

const favCarList = ({id,name,image,info,price,favoriteCars}) =>{

    return(
        <article className='single-tour' >

            <img src={image} alt={name}/>
            <footer>
                <button className="dealership-btn"> 
                    Dealership
                </button>
                <div className='tour-info'>
                    <h4> {name} </h4>
                    <h4 className='tour-price'> ${price}</h4>
                    <p>
                        {info}
                    </p>
                </div>
                
            </footer>
            </article>


    )


    
}

export default favCarList;