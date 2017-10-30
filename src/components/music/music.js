import React, { Component } from 'react';
import '../App.css';

import SideBar from '../sidebar/sidebar'


class Music extends Component {
    render() {
        return (
            <div className="App">
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
            </div>
        );
    }
}

export default Music;
