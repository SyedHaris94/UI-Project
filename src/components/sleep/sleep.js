import React, { Component } from 'react';
import '../App.css';
import SideBar from '../sidebar/sidebar'


class Sleep extends Component {
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
                        }}>Sleep Tight</h3>
                        <p> "Sleep is that golden chain that ties health and our bodies together". <br />
                            -Thomas Dekker</p>
                        <hr />
                    </center>

                    <center style={{
                        fontSize: 25
                    }} >
                        <img src={'./logo.svg'} />
                        <p>Night sky <b>ON</b> </p>
                        <hr />
                    </center>

                    <center style={{
                        fontSize: 25
                    }}>
                        <img />
                        <p>Music <b>OFF</b> </p>
                        <hr />
                    </center>

                    <center style={{
                        fontSize: 25
                    }}>
                        <img />
                        <p>  Curtains are closed </p>
                        <hr />
                    </center>

                    <center style={{
                        fontSize: 25
                    }}>
                        <img />
                        <p>Room temperature <b>18C</b> </p>
                    </center>
                </div>
            </div>
        );
    }
}

export default Sleep;

