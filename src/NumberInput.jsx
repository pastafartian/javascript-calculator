/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function NumberInput({ text, input, setInput }) {
    const changeInput = () => {
        let newInput = input.concat(text);
        setInput(newInput);
    }

    return (
        <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={changeInput}>
                {text}
            </Button>
        </Grid>
    )
}
