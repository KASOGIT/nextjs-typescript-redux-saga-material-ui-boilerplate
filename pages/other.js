import React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';

class Other extends React.Component {
  static async getInitialProps (props) {
    // const { store, isServer } = props.ctx
    // store.dispatch(tickClock(isServer))
    // return { isServer }
  }

  componentDidMount () {
    // this.props.dispatch(startClock())
  }

  render () {
    return (
      <React.Fragment>
        <p>Other Page</p>
        <Link href="/">
          <a>Back to index</a>
        </Link>
      </React.Fragment>
    );
    // return <Page title='Other Page' linkTo='/' NavigateTo='Index Page' />
  }
}

export default connect()(Other)
