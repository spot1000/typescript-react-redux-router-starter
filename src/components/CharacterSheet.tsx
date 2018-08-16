import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import '../App.css';

const styles = (theme: Theme) => createStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    input: {
        margin: theme.spacing.unit,
    }
});

interface Props extends WithStyles<typeof styles> {
    
}

function Inputs(props:Props) {
    const { classes } = props;
    return (
        <div className='App'>
            <div className={classes.container}>
            <Input
                placeholder="Party Code"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Player Name"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Character Name"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Class"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Race"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Level"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Perception Total"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Max HP"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            </div>
            <Button variant="contained" color="primary">Save Character</Button>
            <Button variant="contained" >Reset</Button>

        </div>
    );
}

export default withStyles(styles)(Inputs);