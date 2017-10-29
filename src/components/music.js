import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SideBar from './sidebar'


class Music extends Component {
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
                                MUSIC</h3>
                                <p style={{
                                    fontSize: 20
                                }} >
                                Sound control center <br/>
                            Choose a playlist or manage a song</p>
                                <hr />
                            </center>

                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Music;
