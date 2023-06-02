/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function Clear({ setInput, setValue, setOperator}) {
    const clear = () => {
        setInput('');
        setValue(0);
        setOperator(null);
    }

    return (
        <Grid item xs={3}>
            <Button onClick={clear} id="clear" variant="contained" color="primary">
                AC
            </Button>
        </Grid>
    )
}
