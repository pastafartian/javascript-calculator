/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useStore } from './store.js'

export default function Operator({ id, text}) {
    const calculate = useStore((state) => state.calculate);
    const value = useStore((state) => state.value);
    const operator = useStore((state) => state.operator);
    const setOperator = useStore((state) => state.setOperator);

    const buttonPress= () => {
        //sets the calculation that will be run when equal sign is hit
        setOperator(id);
        //if starting from clean slate, sets value to the current input and resets input
        //otherwise, runs previous calculation with given input and stored value
        if (value != 0 && operator === '') {
            calculate();
        }
    }

    return (
        <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={buttonPress} id={id}>
                {text}
            </Button>
        </Grid>
    )
}
