import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
import Back from 'react-icons/lib/fa/chevron-left'
import './style.css';

class WakeUp extends Component {
    render() {
        return (
            <div className="App" style={styles.container}>
                <SideBar />
                <div className="App" style={styles.main}>
                    <div>
                        <Link to="/scenarios" style={{ textDecoration: 'none' }}>
                            <header style={styles.header}>
                                <Back style={{ marginRight: 20 }} />  back to scenarios
                    </header>
                        </Link>
                        <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
                        <h3 style={{ fontSize: 30 }}>Wake Up</h3>
                        <p style={{ fontSize: 20 }}>Start your day with this calm<br />
                            scenario made for a perfect begining.
                        </p>
                    </div>
                    <hr className='style-two' style={{ width: '700px' }} />
                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Beside Lamp <b>OFF</b></p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{
                        fontSize: 25
                    }}>
                        <img src={require('../images/goodmorning.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Now playing <b>GOOD MORNING</b></p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/wideopen.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Curtains are wide open</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25, marginBottom: 150 }}>
                        <img src={require('../images/temp20.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Room temperature <b>20 &#176;C</b></p>
                        <hr className='style-two' style={{ width: '700px' }} />
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

export default WakeUp;

