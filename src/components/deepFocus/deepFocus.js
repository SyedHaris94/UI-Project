import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Back from 'react-icons/lib/fa/chevron-left'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import SideBar from '../sidebar/sidebar'

import './style.css'
class DeepFocus extends Component {
    render() {
        return (
            <div className="App" style={styles.container}>
                <SideBar />
                <div className="fonts">
                    <div style={styles.main}>
                        <Link to="/scenarios" style={{ textDecoration: 'none' }}>
                            <header style={styles.header}>
                                <Back style={{ marginRight: 20 }} /> back to scenarios
                             </header>
                        </Link>
                        <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
                        <h3 style={{ fontSize: 30 }}>Deep Focus</h3>
                        <p style={{
                            fontSize: 20
                        }} >
                        "What you stay focused on will grow"<br />   -Roy T.Bennett.</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Ceiling Light <b>ON</b></p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/deepfocus.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Now playing <b>AMBIENT CHILL</b></p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/shaded.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Curtains are shadded</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25, marginBottom: 150 }}>
                        <img src={require('../images/temp22.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Room temperature <b>22 &#176;C</b></p>
                    </div>
                </div>
            </div>
        );
    }
}
const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        // justifyContent: 'center'
    },
    header: {
        fontSize: 20,
        color: 'white',
        marginRight: 20
    },
    main: {
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    section: {
        // width:400,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    heading: {
        textAlign: 'center',
        // border:'2px solid white',
        // width:400,
        fontSize: '20px',
        fontWeight: '1px',
        // fontFamily: 'Arial, Helvetica, sans-serif',
        color: 'white'
    }
}
export default DeepFocus;

