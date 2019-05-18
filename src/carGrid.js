import React, {Component} from 'react';
import car1 from '../public/car1.jpg'
import car2 from '../public/car2.jpeg'
import car3 from '../public/car3.jpg'

class CarGrid extends Component {
  render() {
    return (
      <div className='car-grid'>

        <div className='row'>
          <img src={car1} className="car" alt="logo" />
          <img src={car2} className="car" alt="logo" />
          <img src={car3} className="car" alt="logo" />
        </div>

        <div className='row'>
          <div className='car-card'>
            <img src={car1} className="car" alt="logo" />
          </div>
          <div className='car-card'>
            <img src={car1} className="car" alt="logo" />
          </div>
            <div className='car-card'>
            <img src={car1} className="car" alt="logo" />
          </div>
        </div>

        <div className='row'>
          <img src={car1} className="car" alt="logo" />
          <img src={car2} className="car" alt="logo" />
          <img src={car3} className="car" alt="logo" />
        </div>

        <div className='row'>
          <img src={car1} className="car" alt="logo" />
          <img src={car2} className="car" alt="logo" />
          <img src={car3} className="car" alt="logo" />
        </div>
      </div>
    )

  }
}

export default CarGrid;