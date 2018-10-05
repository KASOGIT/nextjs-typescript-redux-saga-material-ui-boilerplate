import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {increment, decrement, reset} from '../features/counter/actions';

import CounterComp from '../components/counter';

const Counter = (props) => (
    <CounterComp {...props} />
);

const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        increment,
        decrement,
        reset
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);