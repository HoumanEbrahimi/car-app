import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Bruh from './Pages/search';
import MainPage from './Pages/mainpage';
import {useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import CarList from './Pages/carlist';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Layout from './Pages/Layout.js';
import Db from './DBs/list.json';
import Favorites from './Pages/favsearch';
import Sewy from './Pages/sewy.js';



const url = 'https://course-api.com/react-tours-project'

function App() {
  const [carData,setDCarData]=useState([]);
  const [favCar,setFavCar] = useState([]);

  const favoriteCars= (id)=>{
    const favCar=carData.filter(car=>car.id!==id);
    setFavCar(favCar); 
  }
  const removeCars= (id)=>{
    const newCars = carData.filter(car => car.id !== id)
    setDCarData(newCars);
  }


  const fetchCars = async () => {
    try{
      const response=await fetch(url);
      const carData=await response.json();
      console.log(carData);
      setDCarData(carData);

    }
    catch(error){
      console.data(error);
    }


}


useEffect(()=>{
  fetchCars();
},[])
  return (


      <div>
        
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage/>}/>
          <Route path="/carlist" element={<Bruh carData={carData} removeCars={removeCars} favoriteCars={favoriteCars}/>
} />
          <Route path="/sewy" element={<Sewy carData={carData}/>} />

        </Route>
      </Routes>
    </BrowserRouter>
      <main>



</main> 
      </div>


  );

}

export default App;
