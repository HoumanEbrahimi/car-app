import React, { useState } from 'react';
import FavoriteCars from './favcarlist';



const sewy = ({favCar}) => {
    return(
        <div>
        <h2 className="section" >
              Selected Cars
            </h2>

          {favCar.map((car)=>car.map((specific)=>{
          return <FavoriteCars key={specific.id}{...specific}/>;
        }
      
      ))};
    </div>
    );
}

export default sewy;