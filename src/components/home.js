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
          <div className="fonts">
            <SideBar/>          
            </div>
            <div className="fonts">
              <center>
              <h1 style={{
                fontSize: 40
              }}>
                  Welcome to your
                  <br/>
                 Private Area Network
                </h1>


                <h2 style={{
                  fontSize: 30
                }}>
                  at Hitech Dubai 2017
                </h2>
              </center>
              
              <center style={{
                fontSize: 25
              }}>
                  <p>CHOOSE YOUR SCENARIO</p>
                  <hr/>
              </center>

              <center style={{
                fontSize: 25
              }}>
                <img src={'./logo.svg'} />
                <p >LIGHTING</p>
                <hr />
              </center>

              <center style={{
                fontSize: 25
              }}>
              <img src={'./logo.svg'} />
              <p >MUSIC</p>
                <hr />
              </center>

              <center style={{
                fontSize: 25
              }}>
              <img src={'./logo.svg'} />
                <p>CURTAINS</p>
                <hr />
              </center>

              <center style={{
                fontSize: 25
              }}>
              <img src={'./logo.svg'} />
                <p>TEMPERATURE</p>
                
              </center>
          </div>
        </MuiThemeProvider>
        </div>
    );
  }
}

export default Home;
