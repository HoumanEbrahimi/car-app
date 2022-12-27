import React, { useState } from 'react';
import FavoriteCars from './favcarlist.js';


const sewy = ({carData}) => {
    return(
        <div>
        <h2 className="section" >
              Selected Cars
            </h2>

        {carData.map((car)=> {
          return <FavoriteCars key={car.id}{...car}>
          </FavoriteCars>;
        }
      
      )};
    </div>
    );
}

export default sewy;