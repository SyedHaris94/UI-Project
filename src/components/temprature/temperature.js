import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from 'react-icons/lib/fa/chevron-left'
import Toggle from 'material-ui/Toggle';
import SideBar from '../sidebar/sidebar';
import '../App.css';
import './style.css'
import Plus from 'react-icons/lib/fa/plus-circle'
import Minus from 'react-icons/lib/fa/minus-circle'

class Temperature extends Component {
    render() {
        return (

            <div className="App" style={styles.container}>
                <SideBar />
                <div className="fonts">
                    <div style={styles.main}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <header style={styles.header}>
                                <Back style={{ marginRight: 20 }} /> back to menu
                             </header>
                        </Link>
                        <img src={require('../images/closed.png')} style={{ width: '250px', height: '150px' }} />
                        <h3 style={{ fontSize: 30 }}>TEMPERATURE</h3>
                        <p style={{ fontSize: 20 }}>Here you can set the room<br/>
                        temperature and check humidity.</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Temperature <b>22 &#176;C</b></p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Humidity 52%</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <Minus style={{ marginLeft: 105, marginTop: -100, fontSize: 35 }} /> 
                        <img src={require('../images/temp22.png')} style={{ width: '250px', height: '150px' }} />
                        <Plus style={{ marginRight: 105, marginTop: -100  ,fontSize: 35 }} />
                        <p>Set room temperature</p>
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
    },
    images: {
        fontSize: '25px'
    }
}
export default Temperature;
