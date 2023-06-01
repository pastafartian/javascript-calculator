/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function Operator({ text, setOperator, id }) {
    const buttonPress= () => {
        setOperator(id);
    }


    return (
        <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={buttonPress} id={id}>
                {text}
            </Button>
        </Grid>
    )
}
