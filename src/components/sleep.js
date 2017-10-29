import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import SideBar from './sidebar'


class SleepTight extends Component {
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
                            <h3>Sleep Tight</h3>
                            "Sleep is that golden chain that ties health"<br />
                            and our bodies together".<br/>
                            -Thomas Dekker
                                <hr />
                        </center>

                        <center>
                            <img src={'./logo.svg'} />
                            Night Sky <b>ON</b>
                            <hr />
                        </center>

                        <center>
                            <img />
                            Music <b>OFF</b>
                            <hr />
                        </center>

                        <center>
                            <img />
                            Curtains are closed
                            <hr />
                        </center>

                        <center>
                            <img />
                            Room temperature <b>18C</b>
                            <hr />
                        </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default SleepTight;

