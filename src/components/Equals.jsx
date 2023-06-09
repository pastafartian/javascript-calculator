/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useStore } from './store.js'

export default function Equals() {
    const calculate = useStore((state) => state.calculate);

    return (
        <Grid item xs={3} id="equals">
            <Button variant="contained" color="primary" onClick={calculate}>
                =
            </Button>
        </Grid>
    )
}
