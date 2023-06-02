/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function NumberInput({ text, input, setInput, value, setValue, operator }) {
    const changeInput = () => {
        //checks for starting value of 0 and whether first digit is 0
        //if not, sets input to corresponding digit
        if (value == 0 && text != "0") {
            setInput(text);
        }
        //initializes temporary
        let newInput = "";
        if (operator != null) {
            newInput = input.concat(text);
            setInput(newInput);
        } else {
            //need to compute new value if operator exists and previous value
            //was the result of a previous calculation
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
