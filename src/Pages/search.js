import CarList from './carlist.js';
const Searching = ({carData,removeCars,favoriteCars}) => {
  
    return (
      <div>
        <h2 className="section" >
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
