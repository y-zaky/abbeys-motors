import React, {Component} from 'react';
import navigationImage from './navigationImage.png'

class Navigation extends Component {
  constructor(){
    super()
    this.state = {
      isClicked: false
    }
  }
  render() {

    const { isClicked } = this.state

   return isClicked
    ?
      <div className='navigation--open' >
        <li className='navigation--button-close' onClick={(click) =>  this.setState({isClicked:!isClicked})} >&times;</li>
        <React.Fragment>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
        </React.Fragment>
      </div>  
    :
      <div className='navigationImage-container'>
        <img className='navigationImage' alt='menu icon' src={navigationImage} onClick={() => this.setState({isClicked:!isClicked})}/>
      </div>
  }
}

export default Navigation;