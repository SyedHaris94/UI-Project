import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SideBar from './sidebar'


class WakeUp extends Component {
    render() {
        return (

            <div className="App">

                <MuiThemeProvider>
                    <div className="App">
                        <SideBar />

                    </div>
                    <div className="App">

                        <center>
                            <header style={{
                                fontSize: 20
                            }}> back to scenarios</header>
                            <img />
                            <h3 style={{
                                fontSize: 25
                            }}>Wake Up</h3>
                            <p>Start your day with this calm<br />
                            scenario made for a perfect begining.</p>
                                <hr />
                        </center>

                        <center style={{
                                fontSize: 20
                            }}>
                            <img src={'./logo.svg'} />
                            <p>Beside Lamp <b>OFF</b></p>
                            <hr />
                        </center>

                        <center style={{
                            fontSize: 20
                        }}>
                            <img />
                            <p>Now playing <b>GOOD MORNING</b></p>
                            <hr />
                        </center>

                        <center style={{
                            fontSize: 20
                        }}>
                            <img />
                            <p>Curtains are wide open</p>
                            <hr />
                        </center>

                        <center style={{
                            fontSize: 20
                        }}>
                            <img />
                            <p>Room temperature <b>20C</b></p>
                            <hr />
                        </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default WakeUp;

