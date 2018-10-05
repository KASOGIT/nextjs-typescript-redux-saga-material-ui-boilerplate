import React from 'react'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const pad = n => (n < 10 ? `0${n}` : n)

const format = t => {
    const hours = t.getUTCHours()
    const minutes = t.getUTCMinutes()
    const seconds = t.getUTCSeconds()
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const Clock = ({ lastUpdate, light }) => {
    return (
        <React.Fragment>
            <Paper>
                <Typography component='p'>
                    {format(new Date(lastUpdate))}
                </Typography>
            </Paper>
        </React.Fragment>
    );
}

export default Clock;