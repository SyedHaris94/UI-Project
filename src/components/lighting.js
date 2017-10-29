import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Toggle from 'material-ui/Toggle';
import SideBar from './sidebar'


const styles = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    },
    thumbOff: {
        backgroundColor: '#ffcccc',
    },
    trackOff: {
        backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
        backgroundColor: 'red',
    },
    trackSwitched: {
        backgroundColor: '#ff9d9d',
    },
    labelStyle: {
        color: 'red',
    },
};

class Lighting extends Component {
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
                                LIGHTNIG</h3>
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
                                <p>Bedside lamp</p> on <div style={{
                                    marginLeft:650,
                                }}><Toggle /> </div>off

                                <hr />
                            </center>

                            <center style={{
                                fontSize: 25
                            }}>
                                <img />
                                <p>Ceiling light</p> on <div style={{
                                    marginLeft: 650,
                                }}><Toggle /> </div>off
                                <hr />
                            </center >

                            <center style={{
                                fontSize: 25
                            }}>
                                <img />
                                <p>Desk lamp</p>on <div style={{
                                    marginLeft: 650,
                                }}><Toggle /> </div>off
                                <hr />
                            </center>

                            <center style={{
                                fontSize: 25
                            }}>
                                <img />
                                <p>Disco flashes</p>on <div style={{
                                    marginLeft: 650,
                                }}><Toggle /> </div>off
                                <hr />
                            </center>

                            <center style={{
                                fontSize: 25
                            }}>
                                <img />
                                <p>Night sky</p>on <div style={{
                                    marginLeft: 650,
                                }}><Toggle /> </div>off
                                <hr />
                            </center>

                            <center style={{
                                fontSize: 25
                            }}>
                                <img />
                                <p>Color Setting</p>on <div style={{
                                    marginLeft: 650,
                                }}><Toggle /> </div>off
                            </center>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Lighting;