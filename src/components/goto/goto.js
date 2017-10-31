import React from 'react'
import Arrow from 'react-icons/lib/fa/arrow-circle-up'

export default class ScrollButton extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: 0
        };
    }
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }
    render() {
        return <button title='Back to top' className='scroll'
          style={{marginTop:50}}
            onClick={() => { this.scrollToTop(); }}>
            <Arrow style={{width:70,height:70}}/>
        </button>;
    }
} 