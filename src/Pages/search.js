import CarList from './carlist.js';
import "./search.css";
import apps from '../App';
import React, { useState } from 'react';

const Searching = ({carData,removeCars,favoriteCars,setDcarData}) => {
  const [a,b]=useState('')


  const handleChange =(e)=> {
    b(e.target.value);
  };

  const handleSearchChange = (e)=>{
      console.log(carData);
      if(a.trim().length!==0){
        
        const filterCars=carData.filter(data=>data.Brand.includes(a))
        setDcarData(filterCars);

      }
      else{

        setDcarData(carData)
        console.log("empty bro")
      }
    

      
}
    return (
      <div >
        
          <input onChange={handleChange} placeholder="Search" type="text" id="search">
          </input>
        <button onClick={handleSearchChange}> Filter </button>
        <h2 className="background">
            Available Cars
        </h2>

        {carData.map((car)=> {
          return <CarList key={car.id}{...car} removeCars={removeCars} favoriteCars={favoriteCars}>
          </CarList>;
        }

      
      )};
 
    </div>
    );
}

export default Searching;
