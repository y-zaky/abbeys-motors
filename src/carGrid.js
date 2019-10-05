import React, {Component} from 'react';
import car1 from '../public/car1.jpg'
import car2 from '../public/car2.jpeg'
import car3 from '../public/car3.jpg'
// toDo  create card grid components, sizes and css of card grid components, make some kind of api call somewhere. 
class CarGrid extends Component {
  render() {

    const gridRows = Array(4).fill(1).map( (row,index) => 
          <div className='row' key={index+'row'}>
            <div className='car-card' key={index}>
              <img src={car1} className="car" alt="logo" />
            </div>
            <div className='car-card'>
              <img src={car2} className="car" alt="logo" />
            </div>
              <div className='car-card'>
              <img src={car3} className="car" alt="logo" />
            </div>
          </div> 
    )

    return (
      <div className='car-grid'>

        {gridRows}
    
      </div>
    )

  }
}

export default CarGrid;