import CarList from './carlist.js';
import "./search.css";
import apps from '../App';
import React, { useState } from 'react';
import Reset from './Reset.js';

const url = 'http://localhost:8000/teslas'

const Searching = ({carData,removeCars,favoriteCars,setDcarData}) => {
  const [a,b]=useState('')
  const [c,d]=useState('')

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

const fetchBrands = (Brand) =>{
  const carData=
}
  const handleChange =(e)=> {
    b(e.target.value);
    d(e.target.value)
  };

  const handleSearchChange = (e)=>{
      if(a.trim().length!==0){
        
        const filterCars=carData.filter(data=>data.Brand.includes(a) || data.Brand.toString().toUpperCase()===a);
        setDcarData(filterCars);

      }
      else{
        fetchCars();
        console.log("empty bro")
      }     
}
const handleBrand = (e)=>{
  var brand=0;
  if(c.trim().length!==0){
    
    const filterCars=carData.filter(data=>data.title.includes(c)|| data.title.toString().toUpperCase()===c)
    setDcarData(filterCars);

    if(a.trim().length!==0){
      brand=a;
    }

  }
  else{
    fetchBrands(a);
    console.log("empty bro")
  }     
}
    return (
      <div >
        
          <input onChange={handleChange} placeholder="Search" type="text" id="search">
          </input>
        <button onClick={handleSearchChange}> Brand</button>
      <p> &nbsp;</p>
        <input onChange={handleChange} placeholder="Search" type="text" id="search">
          </input>
        <button onClick={handleBrand}> Model </button>
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
