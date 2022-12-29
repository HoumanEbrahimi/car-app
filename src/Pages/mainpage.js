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
          
          <h2>
            Filter the car brand you want to search for 
          </h2>
        

        </div>
    );
}

export default MainPage;