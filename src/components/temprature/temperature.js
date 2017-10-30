import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from 'react-icons/lib/fa/chevron-left'
import Toggle from 'material-ui/Toggle';
import SideBar from '../sidebar/sidebar';
import '../App.css';
import './style.css'
import Plus from 'react-icons/lib/fa/plus-circle'
import Minus from 'react-icons/lib/fa/minus-circle'

import SideBar from '../sidebar/sidebar'


class Temperature extends Component {
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
            </div>
        );
    }
}

export default Temperature;
