import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
import Back from 'react-icons/lib/fa/chevron-left';
import ScrollButton from '../goto/goto';
import './style.css';
import '../App.css';

class Sleep extends Component {
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
                        <h3 style={{ fontSize: 30 }}>Sleep Tight</h3>
                        <p style={{
                            fontSize: 20
                        }} >
                            "Sleep is that golden chain that ties health and our bodies together". <br />
                            -Thomas Dekker
                        </p>
                    </div>
                    <hr className='style-two' style={{ width: '700px' }} />
                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Night sky <b>ON</b> </p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{
                        fontSize: 25
                    }}>
                        <img src={require('../images/goodmorning.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Music <b>OFF</b> </p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/closed.png')} style={{ width: '250px', height: '150px' }} />
                        <p>  Curtains are closed </p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25, marginBottom: 150 }}>
                        <img src={require('../images/lightou.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Room temperature <b>18 &#176;C</b></p>
                        <hr className='style-two' style={{ width: '700px' }} />
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

export default Sleep;

