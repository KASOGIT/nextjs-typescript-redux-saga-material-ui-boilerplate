import React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';

import { tickClock } from '../src/features/clock/actions';
import { loadData } from '../src/features/userData/actions';

import Clock from '../src/containers/clock';
import Counter from '../src/containers/counter';
import DataPrinter from '../src/containers/dataPrinter';

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  render () {
    return (
      <React.Fragment>
        <Link href="/other">
          <a>Other Page</a>
        </Link>
        <Clock />
        <Counter />
        <DataPrinter />
      </React.Fragment>
    );
  }
}

export default connect()(Index)
