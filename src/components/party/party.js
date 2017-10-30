import React, { Component } from 'react';
import '../App.css';

import SideBar from '../sidebar/sidebar'


class Party extends Component {
    render() {
        return (

            <div className="App">
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
                        }}>Party Time</h3>
                        <p> choose this scenario when you're ready<br />
                            for a jolly evening with friends.</p>
                        <hr />
                    </center>

                    <center style={{
                        fontSize: 25
                    }} >
                        <img src={'./logo.svg'} />
                        <p>Disko Flashes <b>ON</b> </p>
                        <hr />
                    </center>

                    <center style={{
                        fontSize: 25
                    }}>
                        <img />
                        <p>Now playing <b>DANCEFLOOR HITS</b> </p>
                        <hr />
                    </center>

                    <center style={{
                        fontSize: 25
                    }}>
                        <img />
                        <p>  Curtains are shadded </p>
                        <hr />
                    </center>

                    <center style={{
                        fontSize: 25
                    }}>
                        <img />
                        <p>Room temperature <b>20C</b> </p>
                    </center>
                </div>
            </div>
        );
    }
}

export default Party;

