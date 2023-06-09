/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useStore } from './store.jsx'

export default function NumberInput({ text }) {
    const value = useStore((state) => state.value);
    const setInput = useStore((state) => state.setInput);

    const changeInput = () => {
        //checks for starting value of 0 and whether first digit is 0
        //if not, sets input to corresponding digit
        if (value == 0 && text != "0") {
            setInput(text);
        } else if ( value != 0) {
            //need to compute new value if operator exists and previous value
            //was the result of a previous calculation
            setInput(text);
        }
    }

    return (
        <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={changeInput}>
                {text}
            </Button>
        </Grid>
    )
}
