import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const DataPrinter = ({ placeholderData }) => {
    return (
        <Paper>
            <Typography component="pre">
                    <code>
                        {JSON.stringify(placeholderData, null, 2)}
                    </code>
            </Typography>
        </Paper>
    );
}

export default DataPrinter;