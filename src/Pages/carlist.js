import React, { useState } from 'react';

const CarList = ({id,name,image,info,price,removeCars,favoriteCars}) =>{
    const [readInfo, setReadInfo] = useState(false);
    return(
        
        <article className='single-tour'>

            <img src={image} alt={name}/>
            <footer>
                <div className='tour-info'>
                    <h4> {name} </h4>
                    <h4 className='tour-price'> ${price}</h4>
                    
                </div>
                <p> 
                {readInfo ? info : `${info.substring(0, 200)}...`}
                                    <button onClick={ ()=>setReadInfo(!readInfo)}>
                        {readInfo? 'hide':'show more'};
                    </button>
                </p>
                <button className="delete-btn" onClick={()=>removeCars(id)}>
                    Not Interested 
                </button>
                <button className="interested-btn" onClick={()=>favoriteCars(id)}>
                    Interested
                </button>
            </footer>       
        </article>
        


    );
}
export default CarList;
