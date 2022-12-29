
import React, {useState,useEffect} from 'react';

const url = 'http://localhost:8000/teslas'

function reset(){
    const [carData,setDCarData]=useState([]);

    const fetchCars = async () => {
        try{
          const response=await fetch(url);
          const carData=await response.json();
          setDCarData(carData);
          //setFav(carData);
          console.log(carData);
    
        }
        catch(error){
          console.data(error);
        }
    
    }
    
}


export default reset;