import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
import Back from 'react-icons/lib/fa/chevron-left'


class Music extends Component {
    render() {
        return (
            <div className="App" style={styles.container}>
                <SideBar />
                <div className="fonts" style={styles.main}>

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <header style={styles.header}>
                            <Back style={{ marginRight: 20 }} /> back to menu
                            </header>
                    </Link>
                    <img src={require('../images/happyDancin.png')} style={{ width: '250px', height: '150px' }} />
                    <h3 style={{ fontSize: 35 }}>
                        MUSIC</h3>
                    <p style={{
                        fontSize: 30
                    }} >
                        Sound control center <br />
                        Choose a playlist or manage a song</p>
                    <hr className='style-two' style={{ width: '700px',marginBottom:50 }} />
                    <video width="400" controls>
                        <source src={require('../images/video.mp4')} type="video/mp4" />
                    </video>


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
        minHeight: 700
    },
    header: {
        fontSize: 20,
        color: 'white',
        marginRight: 20
    },
    main: {
        marginTop: 100,
        // justifyContent: 'center',
        // margin: '0px auto'
        marginBottom:100
    },
    block: {
        maxWidth: 250,
        marginLeft: 'auto',
        marginRight: 'auto'

    },
    colorpicker: {
        maxWidth: 250,
        margin: '0px auto',
        marginBottom: 100

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
export default Music;
