import React, { Component } from 'react';
import '../App.css';
import avatar from '../images/avatar.png'

import IconMenu from 'react-icons/lib/md/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    handleToggle() {
        console.log('asfasdfasdf')
        this.setState({ open: !this.state.open });
        console.log(this.state.open)
    }
    render() {
        return (
            <div className="App">
                <div>
                    <AppBar style={{
                        backgroundColor: '#222',
                      
                    }}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onClick={() => this.handleToggle()}
                    />
                    <Drawer
                        open={this.state.open}
                        containerStyle={{ height: 'calc(100% - 64px)', top: 64, backgroundColor: '#222', color: 'white' }}
                        onRequestChange={(open) => this.setState({ open })}
                        docked={false}
                    >
                        <header>
                            <List>
                                <ListItem
                                    disabled={true}
                                    leftAvatar={
                                        <Avatar src={avatar} style={{ borderRadius: 20 }} />
                                    }
                                    style={{ color: 'white', fontSize: 20, marginLeft: 10 }}
                                >
                                    My Profile

                         </ListItem>
                                <hr />
                            </List>
                        </header>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <MenuItem iconClassNameRight="muidocs-icon-navigation-expand-more"
                                style={{
                                    color: 'white',
                                }}>
                                <h3>Main Menu</h3>
                            </MenuItem>
                        </Link>
                        <Link to='/scenarios' style={{ textDecoration: 'none' }}>
                            <MenuItem className="menu"
                                style={{ color: 'white' }}>
                                Your Scenarios
                            </MenuItem>
                        </Link>
                        <div>
                            <List style={{ color: "white" }}>
                                <Link to='/wakeup' style={{ textDecoration: 'none' }}> <ListItem primaryText="wake up" style={{ color: "white" }} /></Link>
                                <Link to='/deepfocus' style={{ textDecoration: 'none' }}>  <ListItem primaryText="deep focus" style={{ color: "white" }} /></Link>
                                <Link to='/party' style={{ textDecoration: 'none' }}>  <ListItem primaryText="party time" style={{ color: "white" }} /></Link>
                                <Link to='/sleep' style={{ textDecoration: 'none' }}> <ListItem primaryText="sleep tight" style={{ color: "white" }} /></Link>
                            </List>
                        </div>

                        <Link to='/lighting' style={{ textDecoration: 'none' }}>
                            <MenuItem style={{ color: 'white' }}>Lighting</MenuItem>
                        </Link>
                        <Link to='/music' style={{ textDecoration: 'none' }}>
                            <MenuItem style={{ color: 'white' }}>Music</MenuItem>
                        </Link>
                        <Link to='/curtains' style={{ textDecoration: 'none' }}>
                            <MenuItem style={{ color: 'white' }}>Curtains</MenuItem>
                        </Link>

                        <Link to='/temperatue' style={{ textDecoration: 'none' }}>
                            <MenuItem style={{ color: 'white', }}>Temperature</MenuItem>
                        </Link>


                        <footer>
                            <hr />
                            Imprint
              </footer>
                    </Drawer>

                </div>

            </div>
        );
    }
}

export default SideBar;
