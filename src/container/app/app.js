import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
// import Home from './home'
// import Scenarios from './scenarios'
// import Temperature from './temperature'
// import Music from './music'
// import Sleep from './sleep'
// import WakeUp from './wakeup'
// import Party from './party'
// import Lighting from './lighting'
// import DeepFocus from './deepFocus'
// import Curtains from './curtains'
import { Home, Scenarios, Temperature, Music, Sleep, WakeUp, Party, Lighting, DeepFocus, Curtains } from '../../components'

injectTapEventPlugin();
class Routes extends React.Component {
    render() {

        return (

            <Router>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/scenarios" component={Scenarios} />
                    <Route path="/lighting" component={Lighting} />
                    <Route path="/music" component={Music} />
                    <Route path="/curtains" component={Curtains} />
                    <Route path="/temperatue" component={Temperature} />
                    <Route path="/wakeup" component={WakeUp} />
                    <Route path="/sleep" component={Sleep} />
                    <Route path="/party" component={Party} />
                    <Route path="/deepfocus" component={DeepFocus} />
                </div>
            </Router>

        );

    }
}


export default Routes;
{/* <Route  path="/" component={Header} />
<Route exact path="/" component={Login} />   */}