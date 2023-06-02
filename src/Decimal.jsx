/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useStore } from './store.js'

export default function Decimal() {
    const input = useStore((state) => state.input);
    const setInput = useStore((state) => state.setInput);

    const changeInput = () => {
        if (! input.includes('.')) {
            let newInput = input.concat('.');
            setInput(newInput);
        }
    }

    return (
        <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={setInput} id="decimal">
                .
            </Button>
        </Grid>
    )
}
