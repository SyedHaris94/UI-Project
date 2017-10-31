import React, { Component } from 'react';

import Back from 'react-icons/lib/fa/chevron-left'
import { Link } from 'react-router-dom';
import SideBar from '../sidebar/sidebar'
import ScrollButton from '../goto/goto';
import '../App.css';

class Scenarios extends Component {
    render() {
        return (
            <div className="App" style={styles.container}>
                <SideBar />
                <div style={styles.main}>
                    <div>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <header style={styles.header}>
                                <Back style={{ marginRight: 20 }} /> back to menu
                            </header>
                        </Link>
                        <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
                        <h3 style={{
                            fontSize: 30
                        }}>
                            CHOOSE YOUR SCENARIO</h3>
                        <p style={{
                            fontSize: 20
                        }} >
                            Set the different option for lightening <br />
                            to create your comfort atmosphere.</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>
                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Wake Up</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Deep Focus</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div >

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/disco.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Party Time</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>
                    <div style={{ fontSize: 25, marginBottom: 100 }}>
                        <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Sleep Tight</p>
                    </div>
                    <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
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
    } 
}

export default Scenarios;
