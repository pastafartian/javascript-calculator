/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function Decimal({ text, input, setInput }) {

    const changeInput = () => {
        if (! input.includes('.')) {
            let newInput = input.concat(text);
            setInput(newInput);
        }
    }

    return (
        <Grid item spacing={3}>
            <Button variant="contained" color="primary" onClick={changeInput} id="decimal">
                .
            </Button>
        </Grid>
    )
}
