import CarList from './carlist.js';
import "./search.css";
import apps from '../App';
import React, { useState } from 'react';
import Reset from './Reset.js';

const url = 'http://localhost:8000/teslas'

const Searching = ({carData,removeCars,favoriteCars,setDcarData}) => {
  const [a,b]=useState('')

  const fetchCars = async () => {    

    try{
      const response=await fetch(url);
      const carData=await response.json();
      setDcarData(carData);

    }
    catch(error){
      console.data(error);
    }

}
  const handleChange =(e)=> {
    b(e.target.value);
  };

  const handleSearchChange = (e)=>{
      if(a.trim().length!==0){
        
        const filterCars=carData.filter(data=>data.Brand.includes(a))
        setDcarData(filterCars);

      }
      else{
        fetchCars();
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
