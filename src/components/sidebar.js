import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';



class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (

            <div className="App">

                <MuiThemeProvider>
                    <div>
                        <AppBar style={{
                            backgroundColor: '#222',
                        }}
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            onClick={this.handleToggle}
                        />
                        <Drawer open={this.state.open} containerStyle={{ height: 'calc(100% - 64px)', top: 64 , backgroundColor: '#222', color: 'white'}}
                        >
                            <header><h2>My Profile</h2></header>
                            <MenuItem iconClassNameRight="muidocs-icon-navigation-expand-more"
                                style={{
                                    color: 'white',
                                }}><h3>Main Menu</h3></MenuItem>
                            <MenuItem className="menu"
                                style={{
                                    color: 'white',
                                }}>Your Scenarios </MenuItem>
                            <center>
                                <ul>wake up</ul>
                                <ul>deep focus</ul>
                                <ul>party time</ul>
                                <ul>sleep tight</ul>
                            </center>

                            <MenuItem style={{
                                color: 'white',
                            }}>Lighting</MenuItem>
                            <MenuItem style={{
                                color: 'white',
                            }}>Music</MenuItem>
                            <MenuItem style={{
                                color: 'white',
                            }}>Curtains</MenuItem>
                            <MenuItem style={{
                                color: 'white',
                            }}>Temperature</MenuItem>


                            <footer>
                                <hr />
                                Imprint
              </footer>
                        </Drawer>

                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default SideBar;
