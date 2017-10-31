import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from 'react-icons/lib/fa/chevron-left';

import SideBar from '../sidebar/sidebar';
import ScrollButton from '../goto/goto';
import '../App.css';
import './style.css'


class Curtains extends Component {
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
                        <h3 style={{ fontSize: 30 }}>CURTAINS</h3>
                        <p style={{ fontSize: 20 }} >
                            Choose a position for  the curtains.</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={styles.images}>
                        <img src={require('../images/wideopen.png')} style={{ width: '250px', height: '150px' }} />
                        <img src={require('../images/shaded.png')} style={{ width: '250px', height: '150px' }} />
                        <img src={require('../images/closed.png')} style={{ width: '250px', height: '150px' }} />
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
    },
    images: {
        fontSize: '25px',
        marginBottom: 100
    }
}
export default Curtains;
