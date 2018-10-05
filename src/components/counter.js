import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <React.Fragment>
            <Paper>
                <Typography component='p'>
                    {count}
                </Typography>
            </Paper>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={reset}>Reset</Button>
        </React.Fragment>
    );
}

export default Counter;