/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function Equals({ text, value, setInput, input}) {
    let operate = (e) => {
        e.preventDefault();

    }

    return (
        <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={operate}>
                {text}
            </Button>
        </Grid>
    )
}
