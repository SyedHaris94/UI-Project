import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import SideBar from './sidebar'


class DeepFocus extends Component {
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
                            <h3>Deep Focus</h3>
                            "What you stay focused on will grow"<br />
                            -Roy T.Bennett.
                                <hr />
                        </center>

                        <center>
                            <img src={'./logo.svg'} />
                            Ceiling Light <b>ON</b>
                            <hr />
                        </center>

                        <center>
                            <img />
                            Now playing <b>AMBIENT CHILL</b>
                            <hr />
                        </center>

                        <center>
                            <img />
                            Curtains are shadded
                            <hr />
                        </center>

                        <center>
                            <img />
                            Room temperature <b>22C</b>
                            <hr />
                        </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default DeepFocus;

