import React, { Component } from 'react';

import { HuePicker } from 'react-color';
import { Link } from 'react-router-dom';
import Back from 'react-icons/lib/fa/chevron-left'
import Toggle from 'material-ui/Toggle';
import SideBar from '../sidebar/sidebar';
import ScrollButton from '../goto/goto';
import '../App.css';
import './style.css'

class Lighting extends Component {
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
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <h3 style={{  fontSize: 35 }}>LIGHTNIG</h3>
                        <p style={{ fontSize: 20 }} >
                            Set the different option for lightening <br />
                            to create your comfort atmosphere.
                        </p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Bedside lamp</p>
                        <p>on</p>
                        <Toggle style={styles.block} />
                        <p>off</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Ceiling light</p>
                        <p>on</p>
                        <Toggle style={styles.block} />
                        <p>off</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div >

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Desk lamp</p>
                        <p>on</p>
                        <Toggle style={styles.block} />
                        <p>off</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Disco flashes</p>
                        <p>on</p>
                        <Toggle style={styles.block} />
                        <p>off</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Night sky</p>
                        <p>on </p>
                        <Toggle style={styles.block} />
                        <p>off</p>
                        <hr className='style-two' style={{ width: '700px' }} />
                    </div>

                    <div style={{ fontSize: 25, justifyContent: 'center' }}>
                        <img src={require('../images/energybulb.png')} style={{ width: '250px', height: '150px' }} />
                        <p>Color Setting</p>
                        <p>on</p>
                        <Toggle style={styles.block} />
                        <p>off</p>
                    <div  style={styles.colorpicker}>  
                      <HuePicker style={{width:200,height:50,borderRadius:50}}/>
                      </div>
                      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
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
   
    },
    header: {
        fontSize: 20,
        color: 'white',
        marginRight: 20
    },
    main: {
        marginTop: 100,
    },
    
    block: {
       maxWidth: 250,
        margin:'0px auto'
    },
    colorpicker:{
        maxWidth: 250,
       margin:'0px auto',
       marginBottom:100

    },
}

export default Lighting;
