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
                    <div>
                        <SideBar/>
                       
                    </div>
                        <div>

                            <center>
                                <header> back to menu</header>
                                <img/>
                                <h3>CHOOSE YOUR SCENARIO</h3>
                                Set the different optiond for lightening <br/>
                                to create your comfort atmosphere.
                                <hr />
                            </center>

                            <center>
                                <img src={'./logo.svg'} />
                                <h3>Wake Up</h3>
                                <hr />
                            </center>

                            <center>
                                <img />
                                <h3>Deep Focus</h3>
                                <hr />
                            </center>

                            <center>
                                <img />
                                <h3>Party Time</h3>
                                <hr />
                            </center>

                            <center>
                                <img />
                                <h3>Sleep Tight</h3>
                                <hr />
                            </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Scenarios;
