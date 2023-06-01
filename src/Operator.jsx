/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function Operator({ text, setOperator, id, input, setInput, value, setValue }) {
    const buttonPress= () => {
        //sets the calculation that will be run when equal sign is hit
        setOperator(id);
        //if starting from clean slate, sets value to the current input and resets input
        //otherwise, runs previous calculation with given input and stored value
        (value == 0 ? () => {
            setValue(input);
            setInput('');
            } : 'hello')
    }

    return (
        <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={buttonPress} id={id}>
                {text}
            </Button>
        </Grid>
    )
}
