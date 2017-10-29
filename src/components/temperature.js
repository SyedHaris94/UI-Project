import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SideBar from './sidebar'


class Temperature extends Component {
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
                            }}>back to menu</header>
                            <img />
                            <h3 style={{
                                fontSize: 25
                            }}>
                                TEMPERATURE</h3>
                            <p style={{
                                fontSize: 20
                            }} >
                                Here you can set the room <br/>temperature and check the humidity.</p>
                            <hr />
                        </center>

                        <center style={{
                            fontSize: 25
                        }}>
                            <img src={'./logo.svg'} />
                            <p> Temperature <b>22C</b></p>
                            <hr />
                        </center>


                        <center style={{
                            fontSize: 25
                        }}>
                            <img src={'./logo.svg'} />
                            <p> Humidity <b>52%</b></p>
                            <hr />
                        </center>

                        <center style={{
                            fontSize: 25
                        }}>
                            <img src={'./logo.svg'} />
                            <p> Set room temperature</p>
                            <hr />
                        </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Temperature;
