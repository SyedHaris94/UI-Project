import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import SideBar from './sidebar'


class WakeUp extends Component {
    render() {
        return (

            <div className="App">

                <MuiThemeProvider>
                    <div>
                        <SideBar />

                    </div>
                    <div>

                        <center>
                            <header> back to scenarios</header>
                            <img />
                            <h3>Wake Up</h3>
                            Start your day with this calm<br />
                            scenario made for a perfect begining.
                                <hr />
                        </center>

                        <center>
                            <img src={'./logo.svg'} />
                            Beside Lamp <b>OFF</b>
                            <hr />
                        </center>

                        <center>
                            <img />
                            Now playing <b>GOOD MORNING</b>
                            <hr />
                        </center>

                        <center>
                            <img />
                            Curtains are wide open
                            <hr />
                        </center>

                        <center>
                            <img />
                            Room temperature <b>20C</b>
                            <hr />
                        </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default WakeUp;

