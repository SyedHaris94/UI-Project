import React, { Component } from "react"

import {Route, Router, browserHistory} from 'react-router'
import Home from './home'
import Scenarios from './scenarios'
import Temperature from './temperature'
import Music from './music'
import Sleep from './sleep'
import WakeUp from './wakeup'
import Party from './party'
import Lighting from './lighting'
import DeepFocus from './deepFocus'
import Curtains from './curtains'


class Routes extends Component(){
    render(){

        return(
            <Router history= { browserHistory } >
                <Route path="/" component={Home}></Route>
                <Route path="/scenarios" component={Scenarios} />
                <Route path="/lighting" component={Lighting} />
                <Route path="/music" component={Music} />
                <Route path="/curtains" component={Curtains} />
                <Route path="/temperatue" component={Temperature} />
                </Router>
        );
        
    }
}

export default Routes;