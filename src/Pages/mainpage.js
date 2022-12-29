import React, { useState } from 'react';
import './mainpage.css';
import CarList2 from './favcarlist.js';
import Db from '../DBs/list.json';


const MainPage =({carData,setDcarData,favCar})=>{
  const handleSearchChange = (e)=>{
      if(!e.target.value) return setDcarData(carData)

      const filterCars=carData.filter(data=>data.Brand.includes(e.target.value))
      setDcarData(filterCars);
  }
    return (
        <div className="body">
                        <h1>
            Welcome to this application

            </h1>
            <br>
            </br>
            <h2> Use this webpage to enhance your searching journey for finding your ideal car</h2>

          
          <h2>
            Search for a car brand
          </h2>
        <form>
          Search
          <input onChange={handleSearchChange}/>          

        </form>

        </div>
    );
}

export default MainPage;