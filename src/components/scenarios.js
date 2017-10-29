import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import SideBar from './sidebar'


class Scenarios extends Component {
    render() {
        return (

            <div className="App">

                <MuiThemeProvider>
                    <div className="fonts">
                        <SideBar/>
                       
                    </div>
                    <div className="fonts">

                            <center>
                            <header style={{
                                fontSize: 20
                            }}>back to menu</header>
                                <img/>
                                <h3  style={{
                                fontSize: 25
                            }}>
                                CHOOSE YOUR SCENARIO</h3>
                                <p style={{
                                    fontSize: 20
                                }} >
                                    Set the different optione for lightening <br/>
                                to create your comfort atmosphere.</p>
                                <hr />
                            </center>

                            <center style={{
                                fontSize: 25
                            }}>
                                <img src={'./logo.svg'} />
                                <p>Wake Up</p>
                                <hr />
                            </center>

                            <center style={{
                                fontSize: 25
                            }}>
                                <img />
                                <p>Deep Focus</p>
                                <hr />
                            </center >

                            <center style={{
                                fontSize: 25
                            }}>
                                <img />
                                <p>Party Time</p>
                                <hr />
                            </center>

                            <center style={{
                                fontSize: 25
                            }}>
                                <img />
                                <p>Sleep Tight</p>
                            </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Scenarios;
