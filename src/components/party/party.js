import React, { Component } from 'react';
import '../App.css';
import './style.css';
import Back from 'react-icons/lib/fa/chevron-left'
import SideBar from '../sidebar/sidebar'
import { Link } from 'react-router-dom';


class Party extends Component {
    render() {
        return (

            <div className="App" style={styles.container}>
                <SideBar />
                <div className="App" style={styles.main}>
                    <div>
                        <Link to="/scenarios" style={{ textDecoration: 'none' }}>
                            <header style={styles.header}>
                                <Back style={{ marginRight: 20 }} /> back to scenarios
                    </header>
                        </Link>
                        <img src={require('../images/disco.png')} style={{ width: '250px', height: '150px' }} />
                        <h3 style={{  fontSize: 30 }}>Party Time</h3>
                        <p style={{
                            fontSize: 20
                        }} >
                        choose this scenario when you're ready<br />
                            for a jolly evening with friends.</p>
                    </div>
                    <hr className='style-two' style={{ width: '700px' }} />
                    <div style={{ fontSize: 25  }}>
                        <img src={require('../images/disco.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Disko Flashes <b>ON</b> </p>
                       <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/dancefloor.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Now playing <b>DANCEFLOOR HITS</b> </p>
                   <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/shaded.png')} style={{ width: '250px', height: '150px' }} />
                        <p>  Curtains are shadded </p>
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

export default Party;


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
