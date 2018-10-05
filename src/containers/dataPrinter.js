import React from 'react'
import { connect } from 'react-redux';

import DataPrinterComp from '../components/dataPrinter';

const DataPrinter = (props) => {
    return (
        <DataPrinterComp {...props} />
    );
}

const mapStateToProps = (state) => {
    return {
        placeholderData: state.userData.placeholderData,
    };
}

export default connect(mapStateToProps)(DataPrinter);