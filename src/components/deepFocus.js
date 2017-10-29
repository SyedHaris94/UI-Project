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
                    <div className="fonts">
                        <SideBar />

                    </div>
                    <div className="fonts">

                        <center>
                            <header style={{
                                fontSize: 20
                            }}> back to scenarios</header>
                            <img />
                            <h3 style={{
                                fontSize: 25
                            }}>Deep Focus</h3>
                        <p>        "What you stay focused on will grow"<br />
                            -Roy T.Bennett.</p>
                                <hr />
                        </center>

                        <center style={{
                            fontSize: 25
                        }}>
                            <img src={'./logo.svg'} />
                            <p>Ceiling Light <b>ON</b></p>
                            <hr />
                        </center>

                        <center style={{
                            fontSize: 25
                        }} >
                            <img />
                            <p>Now playing <b>AMBIENT CHILL</b></p>
                            <hr />
                        </center>

                        <center style={{
                            fontSize: 25
                        }}>
                            <img />
                            <p>Curtains are shadded</p>
                            <hr />
                        </center>

                        <center style={{
                            fontSize: 25
                        }}>
                            <img />
                            <p>Room temperature <b>22C</b></p>
                        </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default DeepFocus;

