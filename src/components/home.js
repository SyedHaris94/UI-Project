import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import SideBar from './sidebar'



class Home extends Component {

  render() {
    return (
      
      <div className="App">
      
        <MuiThemeProvider>
          <div>
            <SideBar/>          
            </div>
            <div>
              <center>
                <h1>
                  Welcome To Your <br/> Private Area Network
                </h1>


                <h2>
                  at Hitech Dubai 2017
                </h2>
              </center>
              
              <center>
                  <h3>CHOOSE YOUR SCENARIO</h3>
                  <hr/>
              </center>

              <center>
                <img src={'./logo.svg'} />
                <h3>LIGHTING</h3>
                <hr />
              </center>

              <center>
                <h3>MUSIC</h3>
                <hr />
              </center>

              <center>
                <h3>CURTAINS</h3>
                <hr />
              </center>

              <center>
                <h3>TEMPERATURE</h3>
                <hr />
              </center>
          </div>
        </MuiThemeProvider>
        </div>
    );
  }
}

export default Home;
