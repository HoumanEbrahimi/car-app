import React, { useState } from 'react';
import FavoriteCars from './favcarlist';



const sewy = ({favCar}) => {
    return(
        <div>
        <h2 className="section" >
              Selected Cars
            </h2>

          {favCar.map((car)=> {
          return <FavoriteCars key={car.id}{...car}/>;
        }
      
      )};
    </div>
    );
}

export default sewy;