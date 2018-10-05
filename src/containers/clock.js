import React from 'react'
import { connect } from 'react-redux';

import { startClock } from '../features/clock/actions';

import ClockComp from '../components/clock';

class Clock extends React.Component {
    componentDidMount() {
        this.props.dispatch(startClock())
    }

    render() {
        return (
            <ClockComp {...this.props}/>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        lastUpdate: state.clock.lastUpdate,
        light: state.clock.light,
    };
}

export default connect(mapStateToProps)(Clock);