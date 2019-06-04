import React, { Component } from 'react';
import SeasonDisp from './SeasonDisp.js' ;
import Load from './Load.js'
import './App.css';

const initState = {
  lat : 0 ,
  long : 0 , 
  error : null ,
} ;

class App extends Component {

  constructor(props)
  {   super(props) ;
      this.state = initState ;
  }

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      (loc) => {
        this.setState( {lat : loc.coords.latitude} ) ;
        this.setState( {long : loc.coords.longitude}) ;
      } ,
      (err) => {
        console.log(err) ;
        this.setState( { error: err.message } ) ;
      }      ) ;
  }

  render() {

    const latStr = " Latitude : " + this.state.lat;
    const longStr = " Longitude : " + this.state.long;

    if( this.state.lat === 0 && this.state.error === null )
    { return (
        <Load msg="while we get your location" />
      ) ;
    }
    else if ( this.state.error === null )
    { return (
        <div className="App">
          <SeasonDisp lat ={this.state.lat}>
            <div> {latStr} </div>
            <div> {longStr} </div>
          </SeasonDisp>    
        </div>
      );
    }
    else
    {
      return (
        <div className="App" >
          <div> {this.state.error} </div>
        </div>
        ) ;
    }
  }
}

export default App;
