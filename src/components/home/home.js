import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import './style.css'
import SideBar from '../sidebar/sidebar'

import IconMenu from 'react-icons/lib/md/menu';
import AppBar from 'material-ui/AppBar';
class Home extends Component {

  render() {
    return (

      <div style={styles.container} className='app'>
        <SideBar />
        <div style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>

          <div style={styles.heading}>
            <h1 className='heading'>
              Welcome to your<br />Private Area Network
           </h1>
            <h2 style={{
              fontSize: '40px',
              fontWeight: 'lighter'
            }}
            > at Hitech Dubai 2017 </h2>
          </div>

          <div style={{ fontSize: 25, display: 'flex', flexDirection: 'column' }} >

            <div style={styles.section}>
              <p style={{ fontSize: '50px', fontWeight: 'lighter', color: 'white' }} >CHOOSE YOUR SCENARIO</p>
              <hr className='style-two' style={{ width: '700px' }} />
              <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
            </div>

            <div style={styles.section}>
              <p style={{ fontSize: '50px', fontWeight: 'lighter', color: 'white', color: 'white' }} >LIGHTING</p>
              <hr className='style-two' style={{ width: '700px' }} />
              <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
            </div>

            <div style={styles.section}>
              <p style={{ fontSize: '50px', fontWeight: 'lighter', color: 'white' }} >MUSIC</p>
              <hr className='style-two' style={{ width: '700px' }} />
              <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
            </div>

            <div style={styles.section}>
              <p style={{ fontSize: '50px', fontWeight: 'lighter', color: 'white' }} >CURTAINS</p>
              <hr className='style-two' style={{ width: '700px' }} />
              <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
            </div>
            
            <div style={styles.section}>
              <p style={{ fontSize: '50px', fontWeight: 'lighter', color: 'white' }} >TEMPERATURE</p>
              <hr className='style-two' style={{ width: '700px' }} />
              <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    // justifyContent: 'center'
  },
  section: {
    // width:400,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  heading: {
    textAlign: 'center',
    // border:'2px solid white',
    // width:400,
    fontSize: '20px',
    fontWeight: '1px',
    // fontFamily: 'Arial, Helvetica, sans-serif',
    color: 'white'
  }
}
export default Home;
