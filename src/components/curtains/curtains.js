import React, { Component } from 'react';
import '../App.css';
import SideBar from '../sidebar/sidebar';


class Curtains extends Component {
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
                            CURTAINS</h3>
                        <p style={{
                            fontSize: 20
                        }} >
                            Choose a position for the curtains.</p>
                        <hr />
                    </center>
                    <center style={{
                        fontSize: 25
                    }}>
                        <img src={'./logo.svg'} />
                        <p></p>
                        <hr />
                    </center>

                </div>

            </div>
        );
    }
}

export default Curtains;
