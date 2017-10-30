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
                    <div>
                        <header style={{
                            fontSize: 20
                        }}>back to menu</header>
                        <img />
                        <h3 style={{
                            fontSize: 25
                        }}>
                            MUSIC</h3>
                        <p style={{
                            fontSize: 20
                        }} >
                            Sound control center <br />
                            Choose a playlist or manage a song</p>
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
        margin: '0px auto'
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
