import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import SideBar from './sidebar'


class PartyTime extends Component {
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
                            <h3>Party Time</h3>
                            choose this scenario when you're ready<br />
                            for a jolly evening with friends.
                                <hr />
                        </center>

                        <center>
                            <img src={'./logo.svg'} />
                            Disko Flashes <b>ON</b>
                            <hr />
                        </center>

                        <center>
                            <img />
                            Now playing <b>DANCEFLOOR HITS</b>
                            <hr />
                        </center>

                        <center>
                            <img />
                            Curtains are shadded
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

export default PartyTime;

