/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useStore } from './store.js'

export default function Clear() {
    const clear = useStore((state) => state.clear);

    return (
        <Grid item xs={3}>
            <Button onClick={clear} id="clear" variant="contained" color="primary">
                AC
            </Button>
        </Grid>
    )
}
