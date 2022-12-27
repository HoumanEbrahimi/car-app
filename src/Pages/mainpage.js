import React, { useState } from 'react';
import './mainpage.css';
import Db from '../DBs/list.json';
import Tesla from './teslas.json';



const MainPage =()=>{
    return (
        <div className="body">
                        <h1>
            Welcome to this application

            </h1>
            <br>
            </br>
            <h2> Use this webpage to enhance your searching journey for finding your ideal car</h2>
        {Tesla.map((tesla)=> {
          return(
            <div key={tesla.id}>
                
                <img src={tesla.imagePath} alt={tesla.id}/>
                console.log(Tesla);
                
            </div>
          );
        } 
        )};


        </div>
    );
}

export default MainPage;